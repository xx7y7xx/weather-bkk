const { WebClient } = require('@slack/web-api');

const options = {};
const web = new WebClient(process.env.SLACK_TOKEN, options);

const sendSlackMessage = async (message, channel = null) => {
    return new Promise(async (resolve, reject) => {
        const channelId = channel || process.env.SLACK_CHANNEL_ID;
        try {
            const resp = await web.chat.postMessage({
                blocks: message,
                channel: channelId,
            });
            return resolve(true);
        } catch (error) {
            console.log('ERROR: Failed to send message!', error)
            return resolve(true);
        }
    });
};


console.log('🚀 Slack Notifier 🚀');

const sendMessage = async(message) => {
    await sendSlackMessage(message);
}

sendMessage('This is generated by Notifier Test App')