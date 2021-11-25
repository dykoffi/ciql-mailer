/**
 *
 * @param {string} title
 * @param {string | number} code
 * @param {string} image
 * @param {object} options
 * @param {object} transporter
 */
export function sendCode(title: string, description: string, code: string, options: object, transporter: object): Promise<number>;
/**
 *
 * @param {string} image
 * @param {string} title
 * @param {string} description
 * @param {string} link
 * @param {object} options
 * @param {object} transporter
 * @returns
 */
export function sendPub(image: string, title: string, description: string, link: string, options: object, transporter: object): Promise<any>;
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
export function sendApproval(title: string, description: string, noLink: string, yesLink: string, options: object, transporter: object): Promise<any>;
/**
 *
 * @param {string} body
 * @param {object} options
 * @param {object} transporter
 * @returns
 */
export function sendBlank(body: string, options: object, transporter: object): Promise<any>;
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
export function sendArticle(title: string, description: string, imgUrl: string, paragraphs: string, options: object, transporter: object): Promise<any>;
