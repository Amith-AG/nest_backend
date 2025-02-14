export async function complete() {
  try {
    const response = await fetch(
      'https://api.deepseek.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY ?? ''}`, // Correct auth format
        },
        body: JSON.stringify({
          model: 'deepseek-chat', // Ensure this is the correct model
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
          ],
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const completion = await response.json();
    console.log({ completion });

    return completion.choices?.[0]?.message?.content ?? 'No response';
  } catch (error) {
    console.error('Error:', error);
    return 'error';
  }
}
