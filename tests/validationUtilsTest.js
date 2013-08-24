function validationUtils(method, val, expected, msg){
			equal(j$.valid[method](val), expected, method+" : "+msg+" ::: input="+val+" |expected="+expected);
		}
		
module("ValidationUtils Test Suite");
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
		validationUtils('isNumber', '1.3',true,"test for valid format");
		validationUtils('isNumber', '.378',true,"test for valid format");
		validationUtils('isNumber', '-1.389989',true,"test for valid format");
		validationUtils('isNumber', '12.356',true,"test for invalid format");
		validationUtils('isNumber', 'fjhfy',false,"test for invalid format");
		validationUtils('isNumber', '.',false,"test for invalid format");
		validationUtils('isNumber', '...',false,"test for invalid format");
		validationUtils('isNumber', '-1.2.3',false,"test for invalid format");
		validationUtils('isNumber', '1..23',false,"test for invalid format");
		validationUtils('isNumber', '1.23.77',false,"test for invalid format");
		validationUtils('isNumber', '',false,"test for invalid format");
		validationUtils('isNumber', ' ',false,"test for invalid format");
		validationUtils('isNumber', '&*%*&%',false,"test for invalid format");
		validationUtils('isNumber', null,false,"test for null");
		validationUtils('isNumber', undefined,false,"test for undefined");
		

	});

	test('isInteger tests',function(){
		
	    //isInteger test cases
		validationUtils('isInteger', '1',true,"test for valid format");
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
		validationUtils('isInteger', '1..1',false,"test for invalid format");
		validationUtils('isInteger', '1.22',false,"test for invalid format");
		validationUtils('isInteger', '1.333',false,"test for invalid format");
		validationUtils('isInteger', '1.4444',false,"test for invalid format");
		validationUtils('isInteger', '1.55555',false,"test for invalid format");
		validationUtils('isInteger', '1.666666',false,"test for invalid format");
		validationUtils('isInteger', '1.7777777',false,"test for invalid format");
		validationUtils('isInteger', '1.888..88888',false,"test for invalid format");
		validationUtils('isInteger', '1.99.999.9999',false,"test for invalid format");
		validationUtils('isInteger', '1..0000',false,"test for invalid informat");
		validationUtils('isInteger', '2341.0000',false,"test for invalid informat");
		validationUtils('isInteger', '',false,"test for invalid informat");
		validationUtils('isInteger', false,false,"test for invalid informat");
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
		validationUtils('isDecimal', '..',false,"invalid informat");
		validationUtils('isDecimal', '.avc',false,"invalid informat");
		validationUtils('isDecimal', '12.avc',false,"invalid informat");
		validationUtils('isDecimal', '.12',true,"valid format");
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