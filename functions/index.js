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

  try {
    if (!title || !description || !code || !options || !transporter) {
      throw new Error('Missing parameters');
    }

    const email = options.to

    await transporter.sendMail({
      from: options.from,
      to: email,
      subject: options.subject,
      priority: options.priority,
      html: await ejs.renderFile(join(__dirname, '../templates/mailCode.ejs'), { title, description, code })
    });

    return code
  } catch (error) {
    throw new Error(error)
  }

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

  try {

    if (!title || !image || !description || !link || !options || !transporter) {
      throw new Error('Missing parameters');
    }

    await transporter.sendMail({
      from: options.from,
      to: options.to,
      subject: options.subject,
      priority: options.priority,
      html: await ejs.renderFile(join(__dirname, '../templates/mailPub.ejs'), { image, title, description, link })
    });

  } catch (error) {
    throw new Error(error)
  }
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

  try {
    
    if (!title || !description || !noLink || !yesLink || !options || !transporter) {
      throw new Error('Missing parameters');
    }
    
    await transporter.sendMail({
      from: options.from,
      to: options.to,
      subject: options.subject,
      priority: options.priority,
      html: await ejs.renderFile(join(__dirname, '../templates/mailApproval.ejs'), { title, description, noLink, yesLink })
    });

  } catch (error) {
    throw new Error(error)
  }

}

/**
 *
 * @param {string} body
 * @param {object} options
 * @param {object} transporter
 * @returns
 */
async function sendBlank(body, options, transporter) {

  try {
    if (!body || !options || !transporter) {
      throw new Error('Missing parameters');
    }
    
    await transporter.sendMail({
      from: options.from,
      to: options.to,
      subject: options.subject,
      priority: options.priority,
      html: await ejs.renderFile(join(__dirname, '../templates/mailBlank.ejs'), { body }),
    });
  } catch (error) {
    throw new Error(error)
  }
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

  try {
    if (!title || !description || !imgUrl || !paragraphs || !options || !transporter) {
      throw new Error('Missing parameters');
    }
    
    await transporter.sendMail({
      from: options.from,
      to: options.to,
      subject: options.subject,
      priority: options.priority,
      html: await ejs.renderFile(join(__dirname, '../templates/mailArticle.ejs'), { title, description, imgUrl, paragraphs }),
    });

  } catch (error) {
    throw new Error(error)
  }
}

module.exports.sendCode = sendCode;
module.exports.sendPub = sendPub;
module.exports.sendApproval = sendApproval;
module.exports.sendBlank = sendBlank;
module.exports.sendArticle = sendArticle;
