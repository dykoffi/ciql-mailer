const nodemailer = require('nodemailer');
const {
  sendCode,
  sendPub,
  sendApproval,
  sendBlank,
  sendArticle } = require('./functions');

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
  async connect(options) {
    try {
      this.transporter = !options ? this.transporter : nodemailer.createTransport(options);
      await this.transporter.verify();
    } catch (error) {
      throw Error(error);
    }
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

  async sendCode(title, description, code,) {
    try {
      const codeGen = await sendCode(title, description, code, this.options, this.transporter)
      return codeGen
    } catch (error) {
      throw Error(error)
    }

  }

  /**
   * Send a blank email
   * @param {string} body
   * @return {Promise}
   */
  async sendBlank(body) {
    try {
      await sendBlank(body, this.options, this.transporter)
    } catch (error) {
      throw Error(error)
    }
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
  async sendArticle(title, description, imgUrl, paragraphs = []) {
    try {
      await sendArticle(title, description, imgUrl, paragraphs, this.options, this.transporter)
    } catch (error) {
      throw Error(error)
    }
  }

  /**
       * Send approval email
       * @param {string} title
       * @param {string} description
       * @param {string} noLink
       * @param {string} yesLink
       * @return {Promise}
       */
  async sendApproval(title, description, yesLink, noLink) {
    try {
      await sendApproval(title, description, noLink, yesLink, this.options, this.transporter)
    } catch (error) {
      throw Error(error)
    }
  }

  /**
       * Send an email withh Pub template
       * @param {string} imgUrl
       * @param {string} title
       * @param {string} description
       * @param {string} link
       * @return {Promise}
       */
  async sendPub(imgUrl, title, description, link) {
    try {
      await sendPub(imgUrl, title, description, link, this.options, this.transporter)
    } catch (error) {
      throw Error(error)
    }
  }
}

module.exports = Mailer;
