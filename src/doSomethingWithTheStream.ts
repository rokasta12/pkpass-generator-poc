import { Stream } from "stream";
import fs from "fs";

/**
 * This function does something with a stream. We pipe the stream to a write
 * stream.
 *
 * @param stream The stream to use
 */
export const doSomethingWithTheStream = (stream: Stream) => {
	// Do something with the stream

	const writeStream = fs.createWriteStream("test");

	// Attach a data event handler to the stream to handle data
	stream.on("data", (chunk: any) => {
		writeStream.write(chunk);
	});

	// Attach an error event handler to the stream to handle errors
	stream.on("error", (error: Error) => {
		// Handle the error
	});

	// Attach a close event handler to the stream to handle closing
	stream.on("close", () => {
		// Handle closing the stream
	});
};
