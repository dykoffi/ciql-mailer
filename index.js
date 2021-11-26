const nodemailer = require('nodemailer');
const {
  sendCode,
  sendPub,
  sendApproval,
  sendBlank,
  sendArticle} = require('./functions');

class Mailer {
  constructor() {
    this.options = {};
    this.transporter = nodemailer.createTransport({
      host: 'node3-ca.n0c.com',
      port: 465,
      secure: true,
      auth: {
        user: 'mailer@ciql.org',
        pass: '#Mailerisfreeandusenodejs1',
      },
    });
  }

  /**
 * Try connection with smtp configuration
 * @param {object} options
 * @return {Promise<any>}
 */
  connect(options) {
    return new Promise((resolve, reject) => {
      try {
        this.transporter = !options ? this.transporter : nodemailer.createTransport(options);
        this.transporter.verify();
        resolve();
      } catch (error) {
        console.log(error.message);
        reject(error);
      }
    });
  }

  /**
       *
       * @param {object} options
       */
  setOptions(options) {
    this.options = options;
  }

  /**
       * Send an email with code verification template
       * @param {string} title
       * @param {string} imgUrl
       * @returns {Promise}
       */

  sendCode(title, imgUrl) {
    return new Promise((resolve, reject) => {
      sendCode(title, imgUrl, this.options, this.transporter)
          .then((code) => {
            resolve(code);
          })
          .catch((err) => {
            reject(err);
          });
    });
  }

  /**
       * Send a blank email
       * @param {string} body
       * @return {Promise}
       */
  sendBlank(body) {
    return new Promise((resolve, reject) => {
      sendBlank(body, this.options, this.transporter)
          .then((code) => {
            resolve(code);
          })
          .catch((err) => {
            reject(err);
          });
    });
  }

  /**
       * Send an email with Article template
       * @param {string} title
       * @param {string} description
       * @param {string} imgUrl
       * @param {Array<object>} paragraphs
       * @returns {Promise}
       */

  // eslint-disable-next-line require-jsdoc
  sendArticle(title, description, imgUrl, paragraphs = []) {
    return new Promise((resolve, reject) => {
      sendArticle(title, description, imgUrl, paragraphs, this.options, this.transporter)
          .then((code) => {
            resolve(code);
          })
          .catch((err) => {
            reject(err);
          });
    });
  }

  /**
       * Send approval email
       * @param {string} title
       * @param {string} description
       * @param {string} noLink
       * @param {string} yesLink
       * @return {Promise}
       */
  sendApproval(title, description, yesLink, noLink) {
    return new Promise((resolve, reject) => {
      sendApproval(title, description, noLink, yesLink, this.options, this.transporter)
          .then((code) => {
            resolve(code);
          })
          .catch((err) => {
            reject(err);
          });
    });
  }

  /**
       * Send an email withh Pub template
       * @param {string} imgUrl
       * @param {string} title
       * @param {string} description
       * @param {string} link
       * @return {Promise}
       */
  sendPub(imgUrl, title, description, link) {
    return new Promise((resolve, reject) => {
      sendPub(imgUrl, title, description, link, this.options, this.transporter)
          .then(() => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
    });
  }
}

module.exports = Mailer;
