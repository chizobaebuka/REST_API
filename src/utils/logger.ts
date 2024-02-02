import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}"`,
} as logger.LoggerOptions<never>);

export default log;
