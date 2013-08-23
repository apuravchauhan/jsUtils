function dateUtils2args(method, val,val2, expected, msg){
			equal(j$.date[method](val,val2), expected, method+" : "+msg+" ::: input="+val+", "+val2+"  |expected="+expected);
}
function dateUtils3args(method, val,val2,val3, expected, msg){
			equal(j$.date[method](val,val2,val3), expected, method+" : "+msg+" ::: input="+val+", "+val2+", "+val3+"  |expected="+expected);
}
		var testDate = new Date();
		var curDate = testDate.getDate(),curUTCDate = testDate.getUTCDate(), 
		curMonth = testDate.getMonth(),curUTCMonth = testDate.getUTCMonth(),
		curYear = testDate.getFullYear(),curUTCYear = testDate.getUTCFullYear(),
		curMin = testDate.getMinutes(),curUTCMin = testDate.getUTCMinutes(),
		curSec = testDate.getSeconds(),curUTCSec = testDate.getUTCSeconds(),
		curMs = testDate.getMilliseconds(),curUTCMs = testDate.getUTCMilliseconds(),
		curHour = testDate.getHours(),curUTCHour = testDate.getUTCHours(),
		curTime = testDate.getTime();
		
		//alert(''+curDate +'-'+ curMonth +'-'+ curYear +'-'+ curMin +'-'+ curSec +'-'  + curMs +'-'+ curHour);
		//alert(''+curUTCDate +'-'+ curUTCMonth +'-'+ curUTCYear +'-'+ curUTCMin +'-'+ curUTCSec +'-'  + curUTCMs +'-'+ curUTCHour);
		//alert(curTime);

module("DateUtils Test Suite");
test( "Locale Configuration Tests", function() {

		//configMonths test
		equal(j$.date.configMonths('io','JAAN JAANURY FIB FIBURY MER MERC AAP AAPRL MAY MAY JUN JUNE JIL JILY AIG AIGUST SIP SIPTEMBR OCT OCTBR NEV NEVMBER DEC DECMBOR'),undefined,'test for locale specific months config');
		j$.date.locale = 'io';

		//getMonths test cases
		equal(j$.date.getMonths()[0],'JAAN','test for locale specific short January month');
		equal(j$.date.getMonths()[1],'JAANURY','test for locale specific long January month');
		//reset date locale to en
		j$.date.locale = 'en';
		equal(j$.date.getMonths()[2],'Feb','test for en locale short Feb month');
		equal(j$.date.getMonths()[3],'February','test for en locale long Feb month');
				
	});

	
test( "Get Date Tests", function() {

		//tests for get
		dateUtils2args('get',testDate,'date',curDate,'test for get date');
		dateUtils3args('get',testDate,'date',true,curUTCDate,'test for get UTC date');
		dateUtils2args('get',testDate,'year',curYear,'test for get year');
		dateUtils3args('get',testDate,'year',true,curUTCYear,'test for get UTC year');
		dateUtils2args('get',testDate,'hour',curHour,'test for get hour');
		dateUtils3args('get',testDate,'hour',true,curUTCHour,'test for get UTC hour');
		dateUtils2args('get',testDate,'ms',curMs,'test for get ms');
		dateUtils3args('get',testDate,'ms',true,curUTCMs,'test for get UTC ms');
		dateUtils2args('get',testDate,'min',curMin,'test for get min');
		dateUtils3args('get',testDate,'min',true,curUTCMin,'test for get UTC min');
		dateUtils2args('get',testDate,'month',curMonth,'test for get month');
		dateUtils3args('get',testDate,'month',true,curUTCMonth,'test for get UTC month');
		dateUtils2args('get',testDate,'sec',curSec,'test for get sec');
		dateUtils3args('get',testDate,'sec',true,curUTCSec,'test for get UTC sec');
		dateUtils2args('get',testDate,'time',curTime,'test for get time');
		dateUtils3args('get',testDate,'time',true,curTime,'test for get UTC time');
		throws(function(){j$.date.get(testDate,'dateabc')},"throws error message in case of invalid field type");
		throws(function(){j$.date.get("89",'date')},"throws error message in case of invalid field type");
	});
		
test( "Set Date Tests", function() {
		//tests for set
		j$.date.set(testDate,{'date':9});
		equal(testDate.getDate(),9,'test for set date');
		j$.date.set(testDate,{'date':23},true);
		equal(testDate.getUTCDate(),23,'test for set UTC date');

		j$.date.set(testDate,{'year':2013});
		equal(testDate.getFullYear(),2013,'test for set year');
		j$.date.set(testDate,{'year':2022},true);
		equal(testDate.getUTCFullYear(),2022,'test for set UTC year');

		j$.date.set(testDate,{'hour':12});
		equal(testDate.getHours(),12,'test for set hour');
		j$.date.set(testDate,{'hour':9},true);
		equal(testDate.getUTCHours(),9,'test for set UTC hour');

		j$.date.set(testDate,{'ms':10});
		equal(testDate.getMilliseconds(),10,'test for set ms');
		j$.date.set(testDate,{'ms':999},true);
		equal(testDate.getUTCMilliseconds(),999,'test for set UTC ms');

		j$.date.set(testDate,{'min':59});
		equal(testDate.getMinutes(),59,'test for set min');
		j$.date.set(testDate,{'min':23},true);
		equal(testDate.getUTCMinutes(),23,'test for set UTC min');

		j$.date.set(testDate,{'month':3});
		equal(testDate.getMonth(),3,'test for set month');
		j$.date.set(testDate,{'month':0},true);
		equal(testDate.getUTCMonth(),0,'test for set UTC month');

		j$.date.set(testDate,{'sec':34});
		equal(testDate.getSeconds(),34,'test for set sec');
		j$.date.set(testDate,{'sec':56},true);
		equal(testDate.getUTCSeconds(),56,'test for set UTC sec');

		j$.date.set(testDate,{'time':1332403882588});
		equal(testDate.getTime(),1332403882588,'test for set time');
		j$.date.set(testDate,{'time':1332403882588},true);
		equal(testDate.getTime(),1332403882588,'test for set time with UTC flag on, although it doesnt mean anything as we only have get/set Time method available');
		
		j$.date.set(testDate,{'min':1,'date':23,'year':2022,'month':10});
		equal(testDate.getMinutes(),1,'test for set multiple fields at once');
		equal(testDate.getDate(),23,'test for set multiple fields at once');
		equal(testDate.getFullYear(),2022,'test for set multiple fields at once');
		equal(testDate.getMonth(),10,'test for set multiple fields at once');
		//add tests for invalid value setter for example abc in setDate
	});

	test( "Format Tests", function() {
		//tests for format
		var dateTest = new Date();
		j$.date.set(dateTest,{'date':23,'month':8,'year':2014})
		dateUtils2args('format',dateTest,'dd/MM/yyyy','23/09/2014','date format test');
		dateUtils2args('format',dateTest,'d/M/y','23/9/14','date format test');
		dateUtils2args('format',dateTest,'d/MMM/yy','23/Sep/14','date format test');
		dateUtils2args('format',dateTest,'d/MMMM/yy','23/September/14','date format test');
		dateUtils2args('format',dateTest,'ddd/MMMMMM/yy','023/September/14','date format test');
		dateUtils2args('format',dateTest,'dd/MMM/yyy','23/Sep/14','date format test');
		dateUtils2args('format',dateTest,'d/MMM/yyyy','23/Sep/2014','date format test');
		dateUtils2args('format',dateTest,'d/MMM/yyyyyy','23/Sep/002014','date format test');
		dateUtils2args('format',dateTest,'ddd/MM/yyyyyy','023/09/002014','date format test');
		dateUtils2args('format',dateTest,'dddd/MMM/yyyyyy','0023/Sep/002014','date format test');
		dateUtils2args('format',dateTest,'MM/yyyyyy','09/002014','date format test');
		dateUtils2args('format',dateTest,'MAAyy','9AA14','date format test');
		dateUtils2args('format',dateTest,'yyyy-MM-dd','2014-09-23','date format test');
		dateUtils2args('format',dateTest,'yy d MMMM','14 23 September','date format test');
		dateUtils2args('format',dateTest,'','','date format test');
		throws(function(){j$.date.format(dateTest,566);},"throws error message in case of invalid field type");
		
	});

	test( "Date Difference Tests", function() {
		//tests for diff
		var dateTest = new Date();
		j$.date.set(dateTest,{'month':7,'date':15,'year':2013,'hour':5,'min':25,'sec':58,ms:90});
		var dateTest2 = new Date();
		j$.date.set(dateTest2,{'month':7,'date':17,'year':2013,'hour':5,min:25,sec:58,ms:90});
	
		dateUtils3args('diff',dateTest,dateTest2,'date',2,'date diff test');
		j$.date.add(dateTest2,{'month':3});
		dateUtils3args('diff',dateTest,dateTest2,'month',3,'month diff test');

		j$.date.add(dateTest2,{'year':2});
		dateUtils3args('diff',dateTest,dateTest2,'year',2,'year diff test');

		j$.date.set(dateTest2,{'date':15,'month':8,'year':2013,'hour':5,'min':25,'sec':58,ms:90});//reinit date2 for time diff calculation
		dateUtils3args('diff',dateTest,dateTest2,'date',31,'date diff test');
		dateUtils3args('diff',dateTest,dateTest2,'month',1,'month diff test');
		dateUtils3args('diff',dateTest,dateTest2,'year',0,'year diff test');
		dateUtils3args('diff',dateTest,dateTest2,'hour',31*24,'hour diff test');
		dateUtils3args('diff',dateTest,dateTest2,'min',31*24*60,'min diff test');
		dateUtils3args('diff',dateTest,dateTest2,'sec',31*24*60*60,'sec diff test');
		dateUtils3args('diff',dateTest,dateTest2,'ms',31*24*60*60*1000,'ms diff test');
		dateUtils3args('diff',dateTest,dateTest2,'time',dateTest2.getTime()-dateTest.getTime(),'time diff test');
		throws(function(){j$.date.diff(dateTest,dateTest2,"343");},"throws error message in case of invalid field type");
		throws(function(){j$.date.diff(dateTest,dateTest2,function(){});},"throws error message in case of invalid field type");
		throws(function(){j$.date.diff(dateTest,dateTest2,1221);},"throws error message in case of invalid field type");
		
		//test case for Feb
		j$.date.set(dateTest,{'date':1,'month':1});
		/*set is called in same order, so if we set 33 to current month i.e 08, it will make the date as 30 +3 
		which means 3rd of 09 (next month. Now in step 2, it will set the month to Feb, so date will become
		2nd Feb and hence diff should be 2 days*/
		j$.date.set(dateTest2,{date:33,'month':1});
		
	    dateUtils3args('diff',dateTest,dateTest2,'date',2,'September(08) shift to feb date diff test');
		dateUtils3args('diff',dateTest,dateTest2,'month',0,'feb month diff test');

		j$.date.set(dateTest2,{date:29});
		dateUtils3args('diff',dateTest,dateTest2,'month',1,'feb month diff test');
		
		
	});
	test( "Add date and time rotation Tests", function() {
		//tests for diff
		var dateTest = new Date();
		j$.date.set(dateTest,{'month':7,'date':15,'year':2013,'hour':5,'min':25,'sec':58,ms:90});
		j$.date.add(dateTest,{'month':1,date:2,year:1,hour:1,min:2,sec:3,ms:12});
		equal(dateTest.getMonth(),7+1,'test for add month');
		equal(dateTest.getDate(),15+2,'test for add date');
		equal(dateTest.getFullYear(),2013+1,'test for add year');
		equal(dateTest.getHours(),5+1,'test for add hour');
		equal(dateTest.getMinutes(),25+2+1,'test for add min (extra one is from the rotation below');
		equal(dateTest.getSeconds(),1,'test for add sec ((58+2-->0)+1 || after 59, min rotates');
		equal(dateTest.getMilliseconds(),90+12,'test for add ms');
		
		//single property add
		j$.date.add(dateTest,{'month':7});
		equal(dateTest.getMonth(),3,'test for add month((prev8+ now7-->0)+3 || after 11, year rotates');
		equal(dateTest.getFullYear(),2014+1,'test for year( it rotaes automatically coz of above month add');
	});

	test( "Days in Month Tests", function() {
		
		var dateTest = new Date();
		j$.date.set(dateTest,{'month':6,'year':2013});

		dateUtils2args('daysInMonth',dateTest,false,31,'days in july, 2013');
		j$.date.set(dateTest,{'month':7});
		dateUtils2args('daysInMonth',dateTest,false,31,'days in august, 2013');
		j$.date.set(dateTest,{'month':8});
		dateUtils2args('daysInMonth',dateTest,false,30,'days in sep, 2013');
		j$.date.set(dateTest,{'month':1});
		dateUtils2args('daysInMonth',dateTest,false,28,'days in feb, 2013');
		j$.date.set(dateTest,{year:2016});
		dateUtils2args('daysInMonth',dateTest,false,29,'days in feb, 2016(Leap year)');
		
		
	});

		test( "Leap Year Tests", function() {
		
		var dateTest = new Date();
		j$.date.set(dateTest,{'year':2013});

		dateUtils2args('isLeapYear',dateTest,false,false,'date obj for 2013 is not leap year');
		j$.date.set(dateTest,{year:2016});
		dateUtils2args('isLeapYear',dateTest,false,true,'date obj for 2016 is a leap year');

		dateUtils2args('isLeapYear',2017,false,false,'2017 is not leap year');
		dateUtils2args('isLeapYear',2020,false,true,'2020 is a leap year');
		
		
	});