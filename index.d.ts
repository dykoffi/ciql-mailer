export = mailer;

interface parItem {
    title: string
    img: string
    text: string
}

interface mailOpts {
    from : string
    to : string
    cc : string
    bcc : string
    priority : string
    subject : string

}

interface connOpts {
    host: string
    port: number
    secure: boolean
    auth: {
        user: string
        pass: string
    }
}

declare class mailer {
    options: connOpts;
    transporter: any;
    /**
     *
     * @param {connOpts} options
     */
    connect(options: connOpts): Promise<any>;
    /**
     *
     * @param {mailOpts} options
     */
    setOptions(options: mailOpts): void;
    /**
     * Send an email with code verification template
     * @param {string} title
     * @param {string} imgUrl
     * @returns {Promise}
     */
    sendCode(title: string, imgUrl: string): Promise<any>;
    /**
     * Send a blank email
     * @param {string} body
     * @returns {Promise}
     */
    sendBlank(body: string): Promise<any>;
    /**
     * Send an email with Article template
     * @param {string} title
     * @param {string} description
     * @param {string} imgUrl
     * @param {Array<object>} paragraphs
     * @returns {Promise}
     */
    sendArticle(title: string, description: string, imgUrl: string, paragraphs?: Array<parItem | string>): Promise<any>;
    /**
     * Send approval email
     * @param {string} title
     * @param {string} description
     * @param {string} noLink
     * @param {string} yesLink
     * @returns {Promise}
     */
    sendApproval(title: string, description: string, noLink: string, yesLink: string): Promise<any>;
    /**
     * Send an email withh Pub template
     * @param {string} imgUrl
     * @param {string} title
     * @param {string} description
     * @param {string} link
     * @returns {Promise}
     */
    sendPub(imgUrl: string, title: string, description: string, link: string): Promise<any>;
}
