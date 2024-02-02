import mongoose from "mongoose";
import config from 'config';
import logger from "./logger";

const connect = () => {
    const dbUri = config.get<string>(
        'dbUri',
    )

    try {
        return mongoose.connect(dbUri)
        logger.info('Connected to MongoDB')
    } catch (error) {
        logger.error(error, `Error connecting to MongoDB`);
        process.exit(1);
    }
}

export default connect;