module.exports = async (client) => {
  const CONFIG = {
    message: "test1\ntest2",
    serverId: "123456789",
    channelId: "123456789",
  };

  const channel = await client.channels
    .fetch(CONFIG.channelId)
    .catch(() => null);
  if (!channel) {
    console.warn(
      `[⚠️Send Message] Channel with ID not found: ${CONFIG.channelId}`
    );
    return;
  }

  try {
    await channel.send(CONFIG.message);

    await new Promise((resolve) => setTimeout(resolve, 7000));
  } catch (error) {
    console.error(
      `[❌Send Message] Error sending message to server: ${channel.guild.name}:`,
      error
    );
  }
};
