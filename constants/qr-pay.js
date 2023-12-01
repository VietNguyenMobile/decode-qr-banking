// Enum: QRProvider
const QRProvider = {
  VIETQR: "VIETQR",
  VNPAY: "VNPAY",
};

// Enum: QRProviderGUID
const QRProviderGUID = {
  VNPAY: "A000000775",
  VIETQR: "A000000727",
};

// Enum: FieldID
const FieldID = {
  VERSION: "00",
  INIT_METHOD: "01",
  VNPAYQR: "26",
  VIETQR: "38",
  CATEGORY: "52",
  CURRENCY: "53",
  AMOUNT: "54",
  TIP_AND_FEE_TYPE: "55",
  TIP_AND_FEE_AMOUNT: "56",
  TIP_AND_FEE_PERCENT: "57",
  NATION: "58",
  ACQUIER: "59",
  CITY: "60",
  ZIP_CODE: "61",
  ADDITIONAL_DATA: "62",
  CRC: "63",
};

// Enum: ProviderFieldID
const ProviderFieldID = {
  GUID: "00",
  DATA: "01",
  SERVICE: "02",
};

// Enum: VietQRSevice
const VietQRSevice = {
  BY_ACCOUNT_NUMBER: "QRIBFTTA",
  BY_CARD_NUMBER: "QRIBFTTC",
};

// Enum: VietQRConsumerFieldID
const VietQRConsumerFieldID = {
  BANK_BIN: "00",
  BANK_NUMBER: "01",
};

// Enum: AdditionalDataID
const AdditionalDataID = {
  BILL_NUMBER: "01",
  MOBILE_NUMBER: "02",
  STORE_LABEL: "03",
  LOYALTY_NUMBER: "04",
  REFERENCE_LABEL: "05",
  CUSTOMER_LABEL: "06",
  TERMINAL_LABEL: "07",
  PURPOSE_OF_TRANSACTION: "08",
  ADDITIONAL_CONSUMER_DATA_REQUEST: "09",
};

// Class: Prodiver
class Prodiver {
  constructor() {
    this.fieldId = undefined;
    this.name = undefined;
    this.guid = undefined;
    this.service = undefined;
  }
}

// Class: AdditionalData
class AdditionalData {
  constructor() {
    this.billNumber = undefined;
    this.mobileNumber = undefined;
    this.store = undefined;
    this.loyaltyNumber = undefined;
    this.reference = undefined;
    this.customerLabel = undefined;
    this.terminal = undefined;
    this.purpose = undefined;
    this.dataRequest = undefined;
  }
}

// Class: Consumer
class Consumer {
  constructor() {
    this.bankBin = undefined;
    this.bankNumber = undefined;
  }
}

// Class: Merchant
class Merchant {
  constructor() {
    this.merchantId = undefined;
  }
}

// Exporting variables and classes
export {
  QRProvider,
  QRProviderGUID,
  FieldID,
  ProviderFieldID,
  VietQRSevice,
  VietQRConsumerFieldID,
  AdditionalDataID,
  Prodiver,
  AdditionalData,
  Consumer,
  Merchant,
};

// export { QRProvider };
