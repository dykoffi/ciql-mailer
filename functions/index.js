const ejs = require('ejs');
const { join } = require('path');

/**
 *
 * @param {string} title
 * @param {string |number} code
 * @param {string} image
 * @param {object} options
 * @param {object} transporter
 */

async function sendCode(title, description, code, options, transporter) {

  const email = options.to
  const html = await ejs.renderFile(join(__dirname, '../templates/mailCode.ejs'), { title, code, email })
  return new Promise((resolve, reject) => {
    try {
      if (!title || !description || !code || !options || !transporter) {
        throw Error('Missing parameters');
      }

      transporter.sendMail({
        from: options.from,
        to: email,
        subject: options.subject,
        priority: options.priority,
        html: html
      });

      resolve(code);
    } catch (error) {
      reject(error.message);
    }
  });
}


/**
 * Send
 * @param {string} image
 * @param {string} title
 * @param {string} description
 * @param {string} link
 * @param {object} options
 * @param {object} transporter
 * @returns
 */
async function sendPub(image, title, description, link, options, transporter) {

  const html = await ejs.renderFile(join(__dirname, '../templates/mailPub.ejs'), { image, title, description, link })
  return new Promise((resolve, reject) => {
    try {
      if (!title || !image || !description || !link || !options || !transporter) {
        throw Error('Missing parameters');
      }

      transporter.sendMail({
        from: options.from,
        to: options.to,
        subject: options.subject,
        priority: options.priority,
        html: html
      });

      resolve();
    } catch (error) {
      reject(error.message);
    }
  });
}

/**
 *
 * @param {string} title
 * @param {string} description
 * @param {string} noLink
 * @param {string} yesLink
 * @param {object} options
 * @param {object} transporter
 * @returns
 */
async function sendApproval(title, description, noLink, yesLink, options, transporter) {

  const html = await ejs.renderFile(join(__dirname, '../templates/mailApproval.ejs'), { title, description, noLink, yesLink })
  return new Promise((resolve, reject) => {
    try {
      if (!title || !description || !noLink ||
        !yesLink || !options || !transporter) {
        throw Error('Missing parameters');
      }

      transporter.sendMail({
        from: options.from,
        to: options.to,
        subject: options.subject,
        priority: options.priority,
        html: html
      });

      resolve();
    } catch (error) {
      reject(error.message);
    }
  });
}

/**
 *
 * @param {string} body
 * @param {object} options
 * @param {object} transporter
 * @returns
 */
async function sendBlank(body, options, transporter) {

  const html = await ejs.renderFile(join(__dirname, '../templates/mailBlank.ejs'), { body })
  return new Promise((resolve, reject) => {
    try {
      if (!body || !options || !transporter) {
        throw Error('Missing parameters');
      }

      transporter.sendMail({
        from: options.from,
        to: options.to,
        subject: options.subject,
        priority: options.priority,
        html: html,
      });

      resolve();
    } catch (error) {
      reject(error.message);
    }
  });
}

/**
 *
 * @param {string} title
 * @param {string} description
 * @param {string} imgUrl
 * @param {string} paragraphs
 * @param {object} options
 * @param {object} transporter
 * @returns
 */
async function sendArticle(title, description, imgUrl, paragraphs, options, transporter) {

  const html = await ejs.renderFile(join(__dirname, '../templates/mailArticle.ejs'), { title, description, imgUrl, paragraphs })
  return new Promise((resolve, reject) => {
    try {
      if (!title || !description || !imgUrl ||
        !paragraphs || !options || !transporter) {
        throw Error('Missing parameters');
      }

      transporter.sendMail({
        from: options.from,
        to: options.to,
        subject: options.subject,
        priority: options.priority,
        html: html,
      });

      resolve();
    } catch (error) {
      reject(error.message);
    }
  });
}

module.exports.sendCode = sendCode;
module.exports.sendPub = sendPub;
module.exports.sendApproval = sendApproval;
module.exports.sendBlank = sendBlank;
module.exports.sendArticle = sendArticle;
