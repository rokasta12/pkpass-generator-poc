import { PKPass } from "passkit-generator";
import {
	doSomethingWithTheBuffer,
	getCertificatesContentsSomehow,
} from "../src/getCertificatesContentsSomehow";
import { doSomethingWithTheStream } from "./doSomethingWithTheStream";

try {
	/** Each, but last, can be either a string or a Buffer. See API Documentation for more */
	const { wwdr, signerCert, signerKey, signerKeyPassphrase } =
		getCertificatesContentsSomehow();

	const pass = await PKPass.from(
		{
			/**
			 * Note: .pass extension is enforced when reading a
			 * model from FS, even if not specified here below
			 */
			model: "./templates/house_cafe.pass",
			certificates: {
				wwdr,
				signerCert,
				signerKey,
				signerKeyPassphrase,
			},
		},
		{
			// keys to be added or overridden
			serialNumber: "AAGH44625236dddaffbda",
		}
	);

	// Adding some settings to be written inside pass.json
	pass.localize("en", {
		description: "This is a description",
		organizationName: "My Organization",
	});

	pass.setBarcodes("36478105430"); // Random value

	// Generate the stream .pkpass file stream
	const stream = pass.getAsStream();
	doSomethingWithTheStream(stream);

	// or

	const buffer = pass.getAsBuffer();
	doSomethingWithTheBuffer(buffer);
} catch (err) {
	console.log(err);
	throw err;
}
