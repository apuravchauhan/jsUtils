test( "StringUtils Test Suite", function() {
	    function j$core(method, val, expected, msg){
			equal(j$[method](val), expected, method+" : "+msg+" ::: input="+val+" |expected="+expected);
		}
		function stringUtils(method, val, expected, msg){
			equal(j$.string[method](val), expected, method+" : "+msg+" ::: input="+val+" |expected="+expected);
		}
		function stringUtils2args(method, val,val2, expected, msg){
			equal(j$.string[method](val,val2), expected, method+" : "+msg+" ::: input="+val+", "+val2+"  |expected="+expected);
		}
		function stringUtils3args(method, val,val2,val3, expected, msg){
			equal(j$.string[method](val,val2,val3), expected, method+" : "+msg+" ::: input="+val+", "+val2+", "+val3+"  |expected="+expected);
		}
		
		//isString test cases
		j$core('isString', undefined,false,"test for undefined");
		j$core('isString', null,false,"test for null");
		j$core('isString', 1,false,"test for int");
		j$core('isString', 1.5,false,"test for decimal");
		j$core('isString', new Object(),false,"test for object");
		j$core('isString', new String("hello"),true,"test for String object");
		j$core('isString', "hi",true,"test for string literal");
		
		//isEmpty test cases
		stringUtils('isEmpty', undefined,true,"test for undefined");
		stringUtils('isEmpty', null,true,"test for null");
		stringUtils('isEmpty', "hello",false,"test for string");
		stringUtils('isEmpty', " ",false,"test for non empty string");
		stringUtils('isEmpty', "",true,"test for empty string");
		stringUtils('isEmpty', new String("hello"),false,"test for String object");
		stringUtils('isEmpty', new String(""),true,"test for empty String object");
		stringUtils('isEmpty', new String(" "),false,"test for non empty String object");
		stringUtils('isEmpty', 123,false,"test for non String");
		

		//isBlank test cases
		stringUtils('isBlank', undefined,true,"test for undefined");
		stringUtils('isBlank', null,true,"test for null");
		stringUtils('isBlank', "hello",false,"test for string");
		stringUtils('isBlank', " ",true,"test for non empty string");
		stringUtils('isBlank', "",true,"test for empty string");
		stringUtils('isBlank', new String("hello"),false,"test for String object");
		stringUtils('isBlank', new String(""),true,"test for empty String object");
		stringUtils('isBlank', new String(" "),true,"test for non empty String object");
		stringUtils('isBlank', 123,false,"test for non string");
		

		//trim test cases
		stringUtils('trim', undefined,undefined,"test for undefined");
		stringUtils('trim', null,null,"test for null");
		stringUtils('trim', "hello","hello","test for string");
		stringUtils('trim', "  hello  ","hello","test for string with left and right spaces");
		stringUtils('trim', " ","","test for non empty string");
		stringUtils('trim', "","","test for empty string");
		stringUtils('trim', new String("  hello  "),"hello","test for String object");
		stringUtils('trim', new String(),"","test for empty String object");
		stringUtils('trim', new String(" "),"","test for non empty String object");
		stringUtils('trim', 123,123,"test for non string value");
		stringUtils2args('trim', " ",null,null,"test for non empty string trimming to null");
		stringUtils2args('trim', "     ","empty","empty","test for non string trimming to empty text");

		//leftTrim test cases
		stringUtils('leftTrim', undefined,undefined,"test for undefined");
		stringUtils('leftTrim', null,null,"test for null");
		stringUtils('leftTrim', "hello","hello","test for string");
		stringUtils('leftTrim', "  hello  ","hello  ","test for string with left and right spaces");
		stringUtils('leftTrim', " ","","test for non empty string");
		stringUtils('leftTrim', "","","test for empty string");
		stringUtils('leftTrim', new String("  hello  "),"hello  ","test for String object");
		stringUtils('leftTrim', new String(),"","test for empty String object");
		stringUtils('leftTrim', new String(" "),"","test for non empty String object");
		stringUtils('leftTrim', 123,123,"test for non string value");
		

		//rightTrim test cases
		stringUtils('rightTrim', undefined,undefined,"test for undefined");
		stringUtils('rightTrim', null,null,"test for null");
		stringUtils('rightTrim', "hello","hello","test for string");
		stringUtils('rightTrim', "  hello  ","  hello","test for string with left and right spaces");
		stringUtils('rightTrim', " ","","test for non empty string");
		stringUtils('rightTrim', "","","test for empty string");
		stringUtils('rightTrim', new String("  hello  "),"  hello","test for String object");
		stringUtils('rightTrim', new String(),"","test for empty String object");
		stringUtils('rightTrim', new String(" "),"","test for non empty String object");
		stringUtils('rightTrim', 123,123,"test for non string value");
		
		//equals test cases
		stringUtils2args('equals', undefined,undefined,true,"test for undefined");
		stringUtils2args('equals', null,null,true,"test for null");
		stringUtils2args('equals', "hello","hello",true,"test for string");
		stringUtils2args('equals', "  hello  ","hello",false,"test for string with left and right spaces");
		stringUtils2args('equals', undefined,null,false,"test for different types");
		stringUtils2args('equals', "apurav","Apurav",false,"test for different case strings");
		stringUtils2args('equals', new String("Apurav"),"apurav",false,"test for different case literal and String object");
		stringUtils3args('equals', new String("Apurav cHauhan"),"apurav CHAUHAN",true,true,"test for different case literal and string object with ignoreCase set to true");
		stringUtils3args('equals', new String("Apurav cHauhan"),"apurav CHAUHAN",false,false,"test for different case literal and string object with ignoreCase set to false");
		stringUtils3args('equals', new String("Apurav cHauhan"),"apurav CHAUHAN","abc",false,"test for different case literal and string object with ignoreCase set to wrong value");
		stringUtils2args('equals', 123,123,true,"test for equal number");
		stringUtils2args('equals', 123,"123",false,"test for non string value and a string value");
		

        //contains test cases
		stringUtils2args('contains', undefined,undefined,false,"test for undefined");
		stringUtils3args('contains', undefined,undefined,true,false,"test for undefined");
		stringUtils2args('contains', null,null,false,"test for null");
		stringUtils2args('contains', "hello","hello",true,"test for complete match ");
		stringUtils2args('contains', "  hello  ","he",true,"test for partial match");
		stringUtils2args('contains', undefined,null,false,"test for undefined with null-- matches");
		stringUtils2args('contains', "apurav","AP",false,"test for different case strings");
		stringUtils2args('contains', "","",true,"test for empty strings");
		stringUtils2args('contains', "   ","",true,"test for string with spaces");
		stringUtils2args('contains', "   "," ",true,"test for string with spaces");
		stringUtils2args('contains', " ","   ",false,"test for string with spaces");
		stringUtils2args('contains', "apurav","67",false,"test for not found");
		stringUtils2args('contains', "apurav chauhan is a developer"," is a ",true,"test for substring");
		stringUtils2args('contains', "apurav chauhan is a developer","r ",false,"test for substring having an extra space");
		stringUtils3args('contains', "apurav","AP",true,true,"test for different case strings with ignoreCase set to true");
		stringUtils2args('contains', "apurav","APURAV",false,"test for different case and complete strings");
		stringUtils2args('contains', new String("Apurav"),"apurav",false,"test for different case and complete literal and String object");
		stringUtils3args('contains', new String("Apurav cHauhan"),"CHAUHAN",true,true,"test for different case literal and string object with ignoreCase set to true");
		stringUtils3args('contains', new String("Apurav cHauhan"),"CHAUHAN",false,false,"test for different case literal and string object with ignoreCase set to false");
		stringUtils3args('contains', new String("Apurav cHauhan")," cHauhan","abc",true,"test for different case literal and string object with ignoreCase set to wrong value");
		stringUtils2args('contains', 123,123,false,"test for non string values");
		stringUtils2args('contains', 123,"123",false,"test for non string values");

	    //capitalize test cases
		stringUtils('capitalize', undefined,undefined,"test for undefined");
		stringUtils('capitalize', null,null,"test for null");
		stringUtils('capitalize', 123,123,"test for number");
		stringUtils2args('capitalize', undefined,true,undefined,"test for undefined with allCaps true ");
		stringUtils2args('capitalize', null,false,null,"test for null with allCaps false");
		stringUtils2args('capitalize', "apurav",false,"Apurav","test for string with allCaps false");
		stringUtils('capitalize', "apurav chauhan","Apurav chauhan","test for string");
		stringUtils2args('capitalize', "apurav Chauhan",true,"APURAV CHAUHAN","test for string with allCaps true");
		stringUtils('capitalize', "a","A","test single letter");
		stringUtils2args('capitalize', "apurav chauhan is a developer",123,"Apurav chauhan is a developer","test for string with invalid allCaps");
		stringUtils('capitalize', "","","test for empty string");
		stringUtils('capitalize', " "," ","test for space");
		stringUtils2args('capitalize', "",true,"","test for empty with allCaps true");
		stringUtils2args('capitalize', " ",true," ","test for space with allCaps true");

		//startsWith test cases
		stringUtils2args('startsWith', undefined,undefined,false,"test for undefined");
		stringUtils3args('startsWith', undefined,undefined,true,false,"test for undefined");
		stringUtils2args('startsWith', null,null,false,"test for null");
		stringUtils2args('startsWith', "hello","he",true,"test for string match ");
		stringUtils2args('startsWith', "  hello  ","he",false,"test for non match");
		stringUtils2args('startsWith', "hello  "," he",false,"test for non match");
		stringUtils2args('startsWith', undefined,null,false,"test for undefined and null match");
		stringUtils2args('startsWith', "apurav","AP",false,"test for different case strings");
		stringUtils2args('startsWith', "apurav","67",false,"test for different string");
		stringUtils2args('startsWith', "apurav chauhan is a developer","apurav ",true,"test for valid match");
		stringUtils2args('startsWith', "","",true,"test for empty string");
		stringUtils3args('startsWith', "apurav","AP",true,true,"test for different case strings with ignoreCase set to true");
		stringUtils2args('startsWith', new String("Apurav"),"a",false,"test for different case and complete literal and String object");
		stringUtils3args('startsWith', new String("Apurav cHauhan"),"apu",true,true,"test for different case literal and string object with ignoreCase set to true");
		stringUtils3args('startsWith', new String("Apurav cHauhan"),"ap",false,false,"test for different case literal and string object with ignoreCase set to false");
		stringUtils3args('startsWith', new String("Apurav cHauhan"),"A","abc",true,"test for same case literal and string object match with ignoreCase set to wrong value");
		stringUtils2args('startsWith', 123,123,false,"test for non string value");
		stringUtils2args('startsWith', 123,"123",false,"test for non string values");

		//endsWith test cases
		stringUtils2args('endsWith', undefined,undefined,false,"test for undefined");
		stringUtils3args('endsWith', undefined,undefined,true,false,"test for undefined");
		stringUtils2args('endsWith', null,null,false,"test for null");
		stringUtils2args('endsWith', "hello","lo",true,"test for string match ");
		stringUtils2args('endsWith', "  hello  ","lo",false,"test for non match");
		stringUtils2args('endsWith', "hello  ","o ",false,"test for non match");
		stringUtils2args('endsWith', undefined,null,false,"test for undefined and null match");
		stringUtils2args('endsWith', "apurav","AV",false,"test for different case strings");
		stringUtils2args('endsWith', "apurav","67",false,"test for different string");
		stringUtils2args('endsWith', "apurav chauhan is a developer"," developer",true,"test for valid match");
		stringUtils2args('startsWith', "","",true,"test for empty string");
		stringUtils3args('endsWith', "apurav","AV",true,true,"test for different case strings with ignoreCase set to true");
		stringUtils2args('endsWith', new String("Apurav"),"V",false,"test for different case and complete literal and String object");
		stringUtils2args('endsWith', new String("Apurav"),"v",true,"test for different case literal and string object");
		stringUtils3args('endsWith', new String("Apurav cHauhan"),"hauhan",true,true,"test for different case literal and string object with ignoreCase set to true");
		stringUtils3args('endsWith', new String("Apurav cHauhan"),"aN",false,false,"test for different case literal and string object with ignoreCase set to false");
		stringUtils3args('endsWith', new String("Apurav cHauhan"),"han","abc",true,"test for same case literal and string object match with ignoreCase set to wrong value");
		stringUtils2args('endsWith', 123,123,false,"test for non string value");
		stringUtils2args('endsWith', 123,"123",false,"test for non string values");
		
		//leftPad test cases
		stringUtils3args('leftPad', undefined,undefined,undefined,undefined,"test for undefined");
		stringUtils3args('leftPad', null,"xx",6,null,"test for null");
		stringUtils3args('leftPad', "valid","xx",6,"xvalid","test for string");
		stringUtils3args('leftPad', "valid","xaxa",8,"xaxvalid","test for string");
		stringUtils3args('leftPad', "apu","x",3,"apu","test for string with equal length");
		stringUtils3args('leftPad', "apu","x",4,"xapu","test for string with less length");
		stringUtils3args('leftPad', "apu","x",2,"apu","test for string with more length");
		stringUtils3args('leftPad', "","x",6,"xxxxxx","test for empty string");
		stringUtils3args('leftPad', new String("Apurav"),"Hi ",9,"Hi Apurav","test for string object");
		stringUtils3args('leftPad', 123,"x",6,123,"test for non string");

		//rightPad test cases
		stringUtils3args('rightPad', undefined,undefined,undefined,undefined,"test for undefined");
		stringUtils3args('rightPad', null,"xx",6,null,"test for null");
		stringUtils3args('rightPad', "valid","xx",6,"validx","test for string");
		stringUtils3args('rightPad', "valid","xaaxa",8,"validxaa","test for string");
		stringUtils3args('rightPad', "apu","x",3,"apu","test for string with equal length");
		stringUtils3args('rightPad', "apu","x",4,"apux","test for string with less length");
		stringUtils3args('rightPad', "apu","x",2,"apu","test for string with more length");
		stringUtils3args('rightPad', "","x",6,"xxxxxx","test for empty string");
		stringUtils3args('rightPad', new String("Apurav"),"Hi ",9,"ApuravHi ","test for string object");
		stringUtils3args('rightPad', 123,"x",6,123,"test for non string");
		
		
	});