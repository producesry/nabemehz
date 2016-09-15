/**
 * Output context information when there is an error.
 */

'use strict';

module.exports = function *(next) {
    try {
        yield next;
    } catch (error) {
        if (error.status === undefined || error.status >= 500) {
            let contextFull = JSON.parse(JSON.stringify(this));
            contextFull.request.body = this.request.body;
            contextFull.request.query = this.request.query;
            contextFull.request.params = this.request.params;
            contextFull.request.state = this.request.state;
            contextFull = JSON.stringify(contextFull, null, 4);

            console.error(
                '\n--------',
                '\n\nErrorStack:\n',
                error.stack,
                '\n\nContext:\n',
                contextFull,
                '\n--------\n'
            );

            this.status = error.status || 500;
            this.body = error.message;

            /**
             * Send message after server fault.
             */
            require('../services/alidayuServs').sendServerFaultMessage();
        } else {
            this.status = error.status;
            this.body = error.message;
        }
    }
};
