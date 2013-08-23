function validationUtils(method, val, expected, msg){
			equal(j$.valid[method](val), expected, method+" : "+msg+" ::: input="+val+" |expected="+expected);
		}
		
module("ValidationUtils Test Suite");
	test( "isEmal tests", function() {
		
		//isEmail test cases
		validationUtils('isEmail', 'achauhan@gmail.com',true,"test for valid email");
		validationUtils('isEmail', ' achauhan@gmail.com.',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@gmail.com ',false,"test for valid format");
		validationUtils('isEmail', 'achauhan@gmail.co.in',true,"test for valid format");
		validationUtils('isEmail', 'achauhan@gmail.xyz',true,"test for valid email");
		validationUtils('isEmail', 'achauhan@gmail.org',true,"test for valid email");
		validationUtils('isEmail', 'achauhan@gmail.info',true,"test for valid email");
		validationUtils('isEmail', 'achauhan_@gmail.com',true,"test for valid email");
		validationUtils('isEmail', 'achauhangmail.com',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@gmail.',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@gmail.c',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@gmail.co-m',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@gmail.c-om',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@gmail.-com',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@gmail.com.',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan.gmail.com.',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan,gmail.com',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan,gmail,com.',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@gmail.com,',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@gmail,',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan @gmail.com.',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@gm ail.com.',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@ gmail.com.',false,"test for invalid format");
		validationUtils('isEmail', 'a chauhan@gmail.com',false,"test for invalid format");
		validationUtils('isEmail', 'a+chauhan@gmail.com',false,"test for invalid format");
		validationUtils('isEmail', 'achauhan@gmailcom',false,"test for invalid format");
		validationUtils('isEmail', '@gmail.com',false,"test for invalid format");
		validationUtils('isEmail', '  @gmail.com',false,"test for invalid format");
		validationUtils('isEmail', 'achauhangmailcom',false,"test for invalid format");
		validationUtils('isEmail', 'a.chauhan@gmail.com',true,"test for invalid format");
		validationUtils('isEmail', '$$$$$@####.com',false,"test for invalid format");
		validationUtils('isEmail', '',false,"test for  blank");
		validationUtils('isEmail', ' ',false,"test for space");
		validationUtils('isEmail', 'achauhan123@gmail.com',true,"test for alphanumeric format");
		validationUtils('isEmail', 'ACHAUHAN@gmail.com',true,"test for upper case format");
		validationUtils('isEmail', 'er.apuravchauhan_2345@gmail.com',true,"test for valid lenght email");
		validationUtils('isEmail', 'a@gmail.com',true,"test for valid email");
		validationUtils('isEmail', null,false,"test for null");
		validationUtils('isEmail', "ghjgjg",false,"test for string");
		validationUtils('isEmail', 5655656,false,"test for num");
		validationUtils('isEmail', undefined,false,"test for undefined");
		
		
		
	});
	test( "isUrl tests", function() {
			
		//isUrl test cases
		validationUtils('isUrl', 'http://www.example.com',true,"test for valid format");
		validationUtils('isUrl', 'https://www.example.com',true,"test for valid format");
		validationUtils('isUrl', 'www.example.com',false,"http protocol missing");
		validationUtils('isUrl', 'www.exam  ple.com',false,"http protocol missing");
		validationUtils('isUrl', 'http://www.exa mple.com',false,"url with space");
		validationUtils('isUrl', 'http://www.example .com',false,"url with space");
		validationUtils('isUrl', 'http://www.example..com',false,"url with double dot");
		validationUtils('isUrl', 'http://www.example.',false,"url with no com");
		validationUtils('isUrl', 'http:// www.example.ccc',false,"url with space");
		validationUtils('isUrl', 'http://example',true,"probably a local alias");
		validationUtils('isUrl', 'http://.com',false,"url with no name");
		validationUtils('isUrl', 'http://.',false,"url with only dot");
		validationUtils('isUrl', 'http://example.com',true,"test for valid format");
		validationUtils('isUrl', 'http://example.example.com',true,"test for sub domain format");
		validationUtils('isUrl', 'https://example.com',true,"valid format");
		validationUtils('isUrl', 'https://example.example.com',true,"https test for sub domain format");
		validationUtils('isUrl', 'example.example.com',false,"test for invalid format");
		validationUtils('isUrl', 'example.com',false,"test for invalid format");
		validationUtils('isUrl', 'http://123.56.56/ghb',true,"test for invalid format");
		validationUtils('isUrl', 'http://',false,"invalid url without server part");
		validationUtils('isUrl', 'http://localhost:8080',true,"valid local url");
		validationUtils('isUrl', 'http://localhost:8080/rest/api',true,"valid url");
		validationUtils('isUrl', null,false,"test for null");
		validationUtils('isUrl', undefined,false,"test for undefined");
		
	});
	test('isCreditCard Tests',function(){
		
		//isCreditCard test cases
		validationUtils('isCreditCard', '5276946759216302',true,"test for valid format");
		validationUtils('isCreditCard', '371449635398431',true,"test for valid format");
		validationUtils('isCreditCard', '30569309025904',true,"test for valid format");
		validationUtils('isCreditCard', '6011111111111117',true,"test for valid format");
		validationUtils('isCreditCard', '3530111333300000',true,"test for valid format");
		validationUtils('isCreditCard', '5555555555554444',true,"test for valid format");
		validationUtils('isCreditCard', '4111111111111111',true,"test for valid format");
		validationUtils('isCreditCard', '1532501462787207',false,"test for invalid format");
		validationUtils('isCreditCard', '2716533113010794',false,"test for invalid format");
		validationUtils('isCreditCard', '3556188373679797',false,"test for invalid format");
		validationUtils('isCreditCard', '4522892840787350',false,"test for invalid format");
		validationUtils('isCreditCard', '6133096580968276',false,"test for invalid format");
		validationUtils('isCreditCard', '746274526081876',false,"test for invalid format");
		validationUtils('isCreditCard', '879182795338424',false,"test for invalid format");
		validationUtils('isCreditCard', '949993071672873',false,"test for invalid format");
		validationUtils('isCreditCard', '94999307167287',false,"test for invalid format");
		validationUtils('isCreditCard', '9499930716728',false,"test for invalid format");
		validationUtils('isCreditCard', '949993071672',false,"test for invalid format");
		validationUtils('isCreditCard', '94999307167',false,"test for invalid format");
		validationUtils('isCreditCard', '9499930716',false,"test for invalid format");
		validationUtils('isCreditCard', '949993071',false,"test for invalid format");
		validationUtils('isCreditCard', '94999307',false,"test for invalid format");
		validationUtils('isCreditCard', '9499930',false,"test for invalid format");
		validationUtils('isCreditCard', '949993',false,"test for invalid format");
		validationUtils('isCreditCard', '94999',false,"test for invalid format");
		validationUtils('isCreditCard', '9499',false,"test for invalid format");
		validationUtils('isCreditCard', '949',false,"test for invalid format");
		validationUtils('isCreditCard', '94',false,"test for invalid format");
		validationUtils('isCreditCard', '9',false,"test for invalid format");
		validationUtils('isCreditCard', '',false,"test for invalid format");
		validationUtils('isCreditCard', ' ',false,"test for invalid format");
		validationUtils('isCreditCard', '%%%%^',false,"test for invalid format");
		validationUtils('isCreditCard', 'ededefde',false,"test for invalid format");
		validationUtils('isCreditCard', '9499930716ddff728',false,"test for invalid format");
		validationUtils('isCreditCard', '94999307167&^^&28',false,"test for invalid format");
		validationUtils('isCreditCard', 'fgfg78uuii',false,"test for invalid format");
		validationUtils('isCreditCard', null,false,"test for null");
		validationUtils('isCreditCard', undefined,false,"test for undefined");
		
		
		

	});

	test('isNumber tests',function(){
		//isNumber test cases
		validationUtils('isNumber', '1',true,"test for valid format");
		validationUtils('isNumber', '2',true,"test for valid format");
		validationUtils('isNumber', '3',true,"test for valid format");
		validationUtils('isNumber', '4',true,"test for valid format");
		validationUtils('isNumber', '5',true,"test for valid format");
		validationUtils('isNumber', '6',true,"test for valid format");
		validationUtils('isNumber', '7',true,"test for valid format");
		validationUtils('isNumber', '8',true,"test for valid format");
		validationUtils('isNumber', '9',true,"test for valid format");
		validationUtils('isNumber', '0',true,"test for valid format");
		validationUtils('isNumber', '22',true,"test for valid format");
		validationUtils('isNumber', '333',true,"test for valid format");
		validationUtils('isNumber', '4444',true,"test for valid format");
		validationUtils('isNumber', '55555',true,"test for valid format");
		validationUtils('isNumber', '666666',true,"test for valid format");
		validationUtils('isNumber', '7777777',true,"test for valid format");
		validationUtils('isNumber', '88888888',true,"test for valid format");
		validationUtils('isNumber', '999999999',true,"test for valid format");
		validationUtils('isNumber', '00000',true,"test for valid format");
		validationUtils('isNumber', '1.3',false,"test for invalid format");
		validationUtils('isNumber', '12.356',false,"test for invalid format");
		validationUtils('isNumber', 'fjhfy',false,"test for invalid format");
		validationUtils('isNumber', '',false,"test for invalid format");
		validationUtils('isNumber', ' ',false,"test for invalid format");
		validationUtils('isNumber', '&*%*&%',false,"test for invalid format");
		validationUtils('isNumber', null,false,"test for null");
		validationUtils('isNumber', undefined,false,"test for undefined");
		

	});

	test('isInteger tests',function(){
		
	    //isInteger test cases
		validationUtils('isNumber', '1',true,"test for valid format");
		validationUtils('isInteger', '2',true,"test for valid format");
		validationUtils('isInteger', '3',true,"test for valid format");
		validationUtils('isInteger', '4',true,"test for valid format");
		validationUtils('isInteger', '5',true,"test for valid format");
		validationUtils('isInteger', '6',true,"test for valid format");
		validationUtils('isInteger', '7',true,"test for valid format");
		validationUtils('isInteger', '8',true,"test for valid format");
		validationUtils('isInteger', '9',true,"test for valid format");
		validationUtils('isInteger', '0',true,"test for valid format");
		validationUtils('isInteger', '22',true,"test for valid format");
		validationUtils('isInteger', '333',true,"test for valid format");
		validationUtils('isInteger', '4444',true,"test for valid format");
		validationUtils('isInteger', '55555',true,"test for valid format");
		validationUtils('isInteger', '666666',true,"test for valid format");
		validationUtils('isInteger', '7777777',true,"test for valid format");
		validationUtils('isInteger', '88888888',true,"test for valid format");
		validationUtils('isInteger', '999999999',true,"test for valid format");
		validationUtils('isInteger', '00000',true,"test for valid format");
		validationUtils('isInteger', '-1',true,"test for valid informat");
		validationUtils('isInteger', '-22',true,"test for valid informat");
		validationUtils('isInteger', '-333',true,"test for valid informat");
		validationUtils('isInteger', '-4444',true,"test for valid informat");
		validationUtils('isInteger', '-5555',true,"test for valid informat");
		validationUtils('isInteger', '-666666',true,"test for valid informat");
		validationUtils('isInteger', '-7777777',true,"test for valid informat");
		validationUtils('isInteger', '-88888888',true,"test for valid informat");
		validationUtils('isInteger', '-999999999',true,"test for valid informat");
		validationUtils('isInteger', '1.1',false,"test for invalid format");
		validationUtils('isInteger', '1.22',false,"test for invalid format");
		validationUtils('isInteger', '1.333',false,"test for invalid format");
		validationUtils('isInteger', '1.4444',false,"test for invalid format");
		validationUtils('isInteger', '1.55555',false,"test for invalid format");
		validationUtils('isInteger', '1.666666',false,"test for invalid format");
		validationUtils('isInteger', '1.7777777',false,"test for invalid format");
		validationUtils('isInteger', '1.88888888',false,"test for invalid format");
		validationUtils('isInteger', '1.999999999',false,"test for invalid format");
		validationUtils('isInteger', '1.0000',false,"test for invalid informat");
		validationUtils('isInteger', '2341.0000',false,"test for invalid informat");
		validationUtils('isInteger', '',false,"test for invalid informat");
		validationUtils('isInteger', 'ihk',false,"test for invalid informat");
		validationUtils('isInteger', '&&**',false,"test for invalid informat");
		validationUtils('isInteger', null,false,"test for null");
		validationUtils('isInteger', undefined,false,"test for undefined");
		
	
	});

	test('isDecimal tests',function(){
			
		//isDecimal test cases
		
		validationUtils('isDecimal', '1.1',true,"test for valid format");
		validationUtils('isDecimal', '1.22',true,"test for valid format");
		validationUtils('isDecimal', '1.333',true,"test for valid format");
		validationUtils('isDecimal', '1.4444',true,"test for valid format");
		validationUtils('isDecimal', '1.55555',true,"test for valid format");
		validationUtils('isDecimal', '1.666666',true,"test for valid format");
		validationUtils('isDecimal', '1.7777777',true,"test for valid format");
		validationUtils('isDecimal', '1.88888888',true,"test for valid format");
		validationUtils('isDecimal', '1.999999999',true,"test for valid format");
		validationUtils('isDecimal', '23627.999999999',true,"test for valid format");
		validationUtils('isDecimal', '-23627.999999999',true,"test for valid format");
		validationUtils('isDecimal', '1.0000',true,"valid informat");
		validationUtils('isDecimal', '0.267',true,"valid informat");
		validationUtils('isDecimal', '1.0.26.7',false,"invalid informat");
		validationUtils('isDecimal', '.',false,"invalid informat");
		validationUtils('isDecimal', '.avc',false,"invalid informat");
		validationUtils('isDecimal', '12.avc',false,"invalid informat");
		validationUtils('isDecimal', 'xcd.avc',false,"invalid informat");
		validationUtils('isDecimal', 'xx.12',false,"invalid informat");
		validationUtils('isDecimal', '2341.0000',true,"valid informat");
		validationUtils('isDecimal', '2341',false,"test for invalid informat");
		validationUtils('isDecimal', '0',false,"test for invalid informat");
		validationUtils('isDecimal', '-1',false,"test for invalid informat");
		validationUtils('isDecimal', '-1.0',true,"test for valid informat");
		validationUtils('isDecimal', '',false,"test for invalid informat");
		validationUtils('isDecimal', ' ',false,"test for invalid informat");
		validationUtils('isDecimal', 'hjgjh',false,"test for invalid informat");
		validationUtils('isDecimal', '^*^**^',false,"test for invalid informat");
		validationUtils('isDecimal', null,false,"test for null");
		validationUtils('isDecimal', undefined,false,"test for undefined");
		
		
	});

	test('isAlpha tests',function(){
		
		//isAlpha test cases
		validationUtils('isAlpha', 'ranjit',true,"test for valid format");
		validationUtils('isAlpha', 'ranjit singh',false,"invalid format with space");
		validationUtils('isAlpha', 'Ranjit',true,"test for valid format");
		validationUtils('isAlpha', 'Ranjit Singh',false,"invalid format with space");
		validationUtils('isAlpha', 'RANJIT',true,"test for valid format");
		validationUtils('isAlpha', 'RANJIT SINGH',false,"invalid format with space");
		validationUtils('isAlpha', 'ranjit123',false,"test for invalid informat");
		validationUtils('isAlpha', '123ranjit',false,"test for invalid informat");
		validationUtils('isAlpha', 'ranjit!@#',false,"test for invalid informat");
		validationUtils('isAlpha', 'ranjit !@#',false,"test for invalid informat");
		validationUtils('isAlpha', '@#$ranjit!@#',false,"test for invalid informat");
		validationUtils('isAlpha', 'ranjit 123',false,"test for invalid informat");
		validationUtils('isAlpha', '123 ranjit 123',false,"test for invalid informat");
		validationUtils('isAlpha', '123ranjit123',false,"test for invalid informat");
		validationUtils('isAlpha', '',false,"test for invalid informat");
		validationUtils('isAlpha', ' ',false,"test for invalid informat");
		validationUtils('isAlpha', '%&%$$',false,"test for invalid informat");
		validationUtils('isAlpha', '11',false,"test for invalid informat");
		validationUtils('isAlpha', null,false,"test for null");
		validationUtils('isAlpha', undefined,false,"test for undefined");
		
		
	});

	test('isAlphanumeric tests',function(){
		//isAlphaNumeric test cases
		validationUtils('isAlphaNumeric', 'ranjit123',true,"test for invalid informat");
		validationUtils('isAlphaNumeric', '123ranjit',true,"test for invalid informat");
		validationUtils('isAlphaNumeric', 'ranjit 123',false,"invalid format with space");
		validationUtils('isAlphaNumeric', '123 ranjit 123',false,"invalid format with space");
		validationUtils('isAlphaNumeric', '123ranjit123',true,"test for invalid informat");
		validationUtils('isAlphaNumeric', 'ranjit',false,"test for invalid format");
		validationUtils('isAlphaNumeric', 'ranjit singh',false,"invalid format with space");
		validationUtils('isAlphaNumeric', 'Ranjit',false,"test for invalid format");
		validationUtils('isAlphaNumeric', 'Ranjit Singh',false,"test for invalid format");
		validationUtils('isAlphaNumeric', 'RANJIT',false,"test for invalid format");
		validationUtils('isAlphaNumeric', 'RANJIT123',true,"test for valid format");
		validationUtils('isAlphaNumeric', '123RANJIT',true,"test for valid format");
		validationUtils('isAlphaNumeric', 'RANJIT SINGH',false,"test for invalid format");
		validationUtils('isAlphaNumeric', 'ranjit!@#',false,"test for invalid informat");
		validationUtils('isAlphaNumeric', 'ranjit !@#',false,"test for invalid informat");
		validationUtils('isAlphaNumeric', '@#$ranjit!@#',false,"test for invalid informat");
		validationUtils('isAlphaNumeric', '',false,"test for invalid informat");
		validationUtils('isAlphaNumeric', ' ',false,"test for invalid informat");
		validationUtils('isAlphaNumeric', '%&%$$',false,"test for invalid informat");
		validationUtils('isAlphaNumeric', '12',false,"only numeric");
		validationUtils('isAlphaNumeric', null,false,"test for null");
		validationUtils('isAlphaNumeric', undefined,false,"test for undefined");

	});