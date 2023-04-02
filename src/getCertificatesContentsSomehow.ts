import fs from "fs";

export const getCertificatesContentsSomehow = () => {
	const wwdr = fs.readFileSync("./certificates/wwdr.pem");
	const signerCert = fs.readFileSync("./certificates/signerCert.pem");
	const signerKey = fs.readFileSync("./certificates/signerKey.pem");
	const signerKeyPassphrase = "passphrase";

	return { wwdr, signerCert, signerKey, signerKeyPassphrase };
};

export const doSomethingWithTheBuffer = (buffer: Buffer) => {
	console.log(buffer);
};
