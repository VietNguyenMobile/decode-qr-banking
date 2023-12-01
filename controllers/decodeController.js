import QRDecode from "./qrDecode.js";

export const decodeGetController = (req, res) => {
  res.send("Decode GET Controller Page");
};

export const decodePostController = (req, res) => {
  try {
    const content_qr_code = req.body.content;

    const qrDecodeTest = new QRDecode(content_qr_code);
    console.log("qrDecodeTest: ", qrDecodeTest);
    const qrPay = { isValid: false };
    if (qrDecodeTest.isValid) {
      return res.status(200).json({ success: true, data: qrDecodeTest });
    } else {
      return res.status(401).json({ success: false, error: "QR Code Invalid" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: "QR Code Invalid" });
  }
};
