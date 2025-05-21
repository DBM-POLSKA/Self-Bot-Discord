module.exports = async (client) => {
  const CONFIG = {
    botId: "302050872383242240",
    botCommand: "bump",
    SERVERS: [
      {
        serverId: "123456789",
        channelId: "123456789",
      },
    ],
  };

  async function bump() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("[🔄Auto Bump] Starting a series of bumps...");

    for (const { channelId } of CONFIG.SERVERS) {
      const channel = await client.channels.fetch(channelId).catch(() => null);
      if (!channel) {
        console.warn(`[⚠️Auto Bump] Channel with ID not found: ${channelId}`);
        continue;
      }

      try {
        const command = await channel.sendSlash(
          `${CONFIG.botId}`,
          `${CONFIG.botCommand}`
        );

        await new Promise((resolve) => setTimeout(resolve, 7000));

        if (command) {
          console.log(
            `[✅Auto Bump] A bump was made on the server: ${channel.guild.name} (${channel.guild.id})`
          );
        } else {
          console.log(
            `[⚠️Auto Bump] Failed to bump server: ${channel.guild.name}`
          );
        }
      } catch (error) {
        console.error(
          `[❌Auto Bump] Server bump error: ${channel.guild.name}:`,
          error
        );
      }
    }

    console.log("[✅Auto Bump] The series of bumps has ended");

    const nextBumpTime =
      Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000;
    const minutesToNext = Math.floor(nextBumpTime / 60000);

    console.log(`[⏰Auto Bump] Next bump in about ${minutesToNext} minutes`);

    setTimeout(() => bump(), nextBumpTime);
  }

  bump();
};
