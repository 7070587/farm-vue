export async function delay(timeMs: number = 250): Promise<void> {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), timeMs));
}
