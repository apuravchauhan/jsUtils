(function(window,undefined){

	var j$ = {}, 
		 toString = Object.prototype.toString, 
		 objTypes = 'String Date Object Array Function'.split(' '), currentType, argAdapter,
		 su, vu, du, au,
		 exMessage = "invalid args",
		/*vu variables start*/
		 emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ ,			 
		 urlRegex = /(ftp|https?):\/\/[^ "]+$/  ,
		 numericRegex = /^[0-9]+$/,
         intRegex = /^\-?[0-9]+$/,
         decimalRegex = /^\-?[0-9]*\.+[0-9]+$/,
         alphaRegex = /^[a-z]+$/i,
         alphaNumericRegex = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i,
		 /*vu variables end*/
		 /*du variables start */
		 defaultLocale = 'en',
         fieldLookup = {
			//the day of the month (from 1-31)
			'date' :['Date',8.64e+7],
			//the year (four digits)
			'year':['FullYear',function(min){return du.isLeapYear(min)?3.162e+10:3.156e+10}],
			//the hour (from 0-23)
			'hour':['Hours',3.6e+6],
			//the milliseconds (from 0-999)
			'ms':['Milliseconds',1],
			//the minutes (from 0-59)
			'min':['Minutes',60000],
			//the month (from 0-11)
			'month':['Month',function(min){return du.daysInMonth(min)*8.64e+7}],
			//the seconds (from 0-59)
			'sec':['Seconds',1000],
			/*Sets/gets a date and time by adding or subtracting a specified 
			number of milliseconds to/from midnight January 1, 1970*/
			'time':['Time',1]
		},
		patternLetters = {
			'y':function(date,count,selectUTC){ 
				    if(count<4) return (''+du.get(date,'year',selectUTC)).slice(2);
					return (new Array(count).join('0')+du.get(date,'year',selectUTC)).slice(-count); 
				},
			'M':function(date,count,selectUTC){ 
					switch(count){
						case 1: return du.get(date,'month',selectUTC)+1;
						case 2: return ('0'+(du.get(date,'month',selectUTC)+1)).slice(-2);
						case 3: return du.getMonths()[du.get(date,'month',selectUTC)*2];
						default: return du.getMonths()[du.get(date,'month',selectUTC)*2 +1];
					}
			  },
			'd':function(date,count,selectUTC){ 
				  if(count>1) return (new Array(count).join('0')+du.get(date,'date',selectUTC)).slice(-count);
				  return du.get(date,'date',selectUTC);
			}
		},
		months = {},
		setIdentifier = 'forSet',
		utc = 'UTC',
		isUTC,
		/*du variables end */
		/*au variables start*/
		fx;
		/*au variables end*/
	
   /** string utils begin **/
 	su = j$.string = {};

	//see su.isBlank for blank check
	//works for string arg
	su.isEmpty = function(str){
		//value comparison with double = returns true for both undefined and null check.
		return str==undefined || (j$.isString(str) && str.length==0);
	};
	su.isBlank = function(str){
		return str == undefined ||(j$.isString(str) && su.trim(str).length==0);
	};
	su.trim = function(str,trimTo){
		var result = j$.isString(str)?str.replace(/^\s+|\s+$/g,''):str;
		return trimTo!== undefined && su.isEmpty(result)? trimTo: result;
	};
	su.leftTrim = function(str){
		return j$.isString(str)?str.replace(/^\s+/,''):str;
	};
	su.rightTrim = function(str){
		return j$.isString(str)?str.replace(/\s+$/,''):str;
	};
	su.equals = function(str1,str2,ignoreCase){
		if(j$.isString(str1,str2))
			return ignoreCase === true?str1.toLowerCase()==str2.toLowerCase():str1==str2;
		return str1===str2;
	};
	su.contains = function(str,searchStr,ignoreCase){
		if(j$.isString(str,searchStr))
			return ignoreCase === true? str.toLowerCase().indexOf(searchStr.toLowerCase())>-1: 
				str.indexOf(searchStr)>-1;
		return false; 
	};
	su.capitalize = function(str,allCaps){
		if(j$.isString(str))
			return allCaps===true? str.toUpperCase():  str.charAt(0).toUpperCase() + str.slice(1);
		return str;
	};
	su.startsWith = function(str,searchStr,ignoreCase){
		if(j$.isString(str,searchStr)) 
			return ignoreCase === true? str.toLowerCase().slice(0, searchStr.length)==searchStr.toLowerCase(): 
				str.slice(0, searchStr.length)==searchStr;
		return false;
	};
	su.endsWith =  function(str,searchStr,ignoreCase){
		if(j$.isString(str,searchStr)) 
			return ignoreCase === true? str.toLowerCase().slice(str.length- searchStr.length)==searchStr.toLowerCase(): 
				str.slice(str.length- searchStr.length)==searchStr;
		return false;
	};
	su.leftPad = function(str,pad,length){
		var lengthDiff;
		if(j$.isString(str) && length && pad && (lengthDiff = length - str.length )>0)
			return new Array(lengthDiff+1).join(pad).slice(0,lengthDiff)+str;
		return str;
	}
	su.rightPad = function(str,pad,length){
		var lengthDiff;
		if(j$.isString(str) && length && pad && (lengthDiff = length - str.length) >0)
			return str+new Array(lengthDiff+1).join(pad).slice(0,lengthDiff);
		return str;
	}
/** string utils end **/


/** validation utils begin **/
	vu = j$.valid = {};

	vu.isEmail = function(str){
		return emailRegex.test(str);
	}

	vu.isUrl = function(str){
		return urlRegex.test(str);
	}

	vu.isCreditCard = function(str){
		    /**Luhn mod_10 algo 
				ref: http://af-design.com/blog/2010/08/18/validating-credit-card-numbers/
				ref: https://github.com/jzaefferer/jquery-validation/blob/f5f47c5c661da5b0c0c6d59d169e82230928a804/src/core.js
			**/
			if ( /[^0-9 \-]+/.test(str) ) return false;
			var nCheck = 0, nDigit = 0, bEven = false;

			str = str.replace(/\D/g, "");
			if ( str.length < 13 || str.length > 19 ) return false;
		
			for (var n = str.length - 1; n >= 0; n--) {
				var cDigit = str.charAt(n);
				nDigit = parseInt(cDigit, 10);
				if ( bEven ) {
					if ( (nDigit *= 2) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}
			return (nCheck % 10) === 0;
	}

	vu.isNumber = function(val){
		return numericRegex.test(val);
	}

	vu.isInteger = function(val){
		return intRegex.test(val);
	}

	vu.isDecimal = function(val){
		return decimalRegex.test(val);
	}

	vu.isAlpha = function(val){
		return val==undefined?false:alphaRegex.test(val);
	}
	//document that alphanumeric is strict
	vu.isAlphaNumeric = function(val){
		return alphaNumericRegex.test(val);
	}

/** validation utils end **/

/** date utils start **/
	
	du = j$.date= {};
	du.locale = defaultLocale;
	du.UTC = false;
	isUTC = function(selectUTC){
		if(selectUTC === undefined) return du.UTC;
		return selectUTC === true;
	}
	du.configMonths = function(locale,monthString){
		months[locale] = monthString.split(' ');
	}
	du.getMonths = function(){
		return months[du.locale] || months[defaultLocale];
	}

	du.configMonths('en','Jan January Feb February Mar March Apr April May May Jun June Jul July Aug August Sep September Oct October Nov November Dec December');
	/*document that while setting/adding multiple values, the set/add will be done in the same order
	*as provided, check feb test case */
	du.set = function(date,options,selectUTC){
		//time field is a special case not having a utc getter and setter
		du.add(date,options,selectUTC,setIdentifier);
	}
	du.add = function(date,options,selectUTC){
		//time field is a special case not having a utc getter and setter
		if(!j$.isDate(date)) throw exMessage;
		var key, UTCon, appender;
		for(key in options){
			if(fieldLookup[key])
				UTCon = isUTC(selectUTC) && key!='time'?utc:'';
				appender = arguments[3]===setIdentifier?0:date['get'+UTCon+fieldLookup[key][0]]();
				date['set'+UTCon+fieldLookup[key][0]](appender+options[key]);
		}
	}
	//document that hour returns in 24 hour format
	du.get = function(date, field,selectUTC){
		//time field is a special case not having a utc getter and setter
		if(j$.isDate(date) && fieldLookup[field]){
			var UTCon = isUTC(selectUTC) && field!='time'?utc:'';
			return date['get'+UTCon+fieldLookup[field][0]]();
		}
		throw exMessage;
	}
    //document about month setting i.e 1 more than set month
	du.format = function(date,format,selectUTC){
		if(j$.isDate(date) && j$.isString(format)){
					var container = {},index = 0,findex,conindex;
					for(findex in format){
						if(patternLetters[format[findex]]) {
							container[format[findex]] = j$.string.trim(container[format[findex]],0)+1;
						}else{
							container['split'+index++] = format[findex];
						}
					}
					var formattedDate = '';
					for(conindex in container){
						if(patternLetters[conindex]) {
							formattedDate +=patternLetters[conindex](date,container[conindex],selectUTC);
						}else{
							formattedDate += container[conindex];
						}
					}
					return formattedDate;
		}
		throw exMessage;
	}
	du.diff = function(minDate,maxDate,unit){
		/*var minUTC = Date.UTC(minDate.getFullYear(), minDate.getMonth(), minDate.getDate(),minDate.getHours(),minDate.getMinutes(),minDate.getSeconds(),minDate.getMilliseconds()), 
			  maxUTC = Date.UTC(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(),maxDate.getHours(),maxDate.getMinutes(),maxDate.getSeconds(),maxDate.getMilliseconds()),
		      lookUp = fieldLookup[unit], diff = maxUTC - minUTC, unitValue;*/
		var lookUp = fieldLookup[unit], diff = maxDate - minDate, unitValue;
		if(!lookUp) throw exMessage;
		unitValue = j$.isFunction(lookUp[1])?lookUp[1](minDate):lookUp[1];
		return Math.floor(diff / unitValue);
		
	}
	du.isLeapYear = function(obj,selectUTC){
		if (j$.isDate(obj)) obj = du.get(obj,'year',selectUTC);
		return (( obj % 4 === 0 ) && ( obj % 100 !== 0 )) || ( obj % 400 === 0);
	}
	du.daysInMonth = function(date,selectUTC){
		var m = du.get(date,'month',selectUTC);
        if (m === 1) return du.isLeapYear(date,selectUTC) ? 29 : 28;
		return new Date(du.get(date,'year',selectUTC),m+1,0).getDate();
	}
/** date utils end **/

/** collection utils start **/
    au = j$.array= {};
	fx = au.fx = {};
	au.indexOf = function(list, obj,condition){
		if(!j$.isArray(list)) throw exMessage;
			var i =-1,l= list.length;
			if(!j$.isFunction(condition)) condition = fx.equalChecker;
		    while (++i<l) 
			  if (condition(list[i],obj)) return i;
			return -1;
	}
	
	au.contains = function(list, obj,condition){
		return au.indexOf(list, obj,condition)>-1;
	}
	//document the comparison criteria for default method
	fx.equalChecker = function(src,target){
		return j$.haveSameOrigin(src,target)?src==target: src===target;
	}
	fx.uniqueMerger = function(list,obj){
		return !au.contains(list,obj);
	}
    au.merge = function(list1,list2,condition){
		if(!j$.isArray(list1,list2)) throw exMessage;
			var lindex,resultList=list1.slice(0);
			for(lindex in list2){
				if(j$.isFunction(condition)){
					if(condition(resultList,list2[lindex]))
						resultList.push(list2[lindex]);
				}else{
					resultList.push(list2[lindex]);
				}
			}
			return resultList;
     }
	 //document that list2 elemets will be retrieved that exists in list1
	 au.intersect = function(list1,list2,comparator){
		if(!j$.isArray(list1,list2)) throw exMessage;
			var lindex,compareList =list1.slice(0), resultList=[],rindex;
			for(lindex in list2){
				if((rindex = au.indexOf(compareList,list2[lindex],comparator))>-1){
					resultList.push(list2[lindex]);
					compareList.splice(rindex, 1);
				}
			}
			return resultList;
      }
	  au.subtract = function(parentList,childList,comparator){
		if(!j$.isArray(parentList,childList))	throw exMessage;
			var lindex, foundIndex, resultList=parentList.slice(0);
			for(lindex in childList){
					if((foundIndex = au.indexOf(resultList,childList[lindex],comparator))>-1)
						resultList.splice(foundIndex,1);
			}
			return resultList;
	  }
	  au.isSublist = function(parentList,childList,comparator){
		if(!j$.isArray(parentList,childList))  throw exMessage;
			var lindex,rindex,compareList=parentList.slice(0);
			for(lindex in childList){
					if((rindex =au.indexOf(compareList,childList[lindex],comparator))==-1){
						return false
					}else{
						compareList.splice(rindex,1);
					}
			}
			return true;
	  }
	  au.equals = function(list1, list2,comparator){
		  if(!j$.isArray(list1,list2))  throw exMessage;
		  return list1.length==list2.length && au.isSublist(list1,list2,comparator);
	  }
	  au.containsAny = function(parentList,childList,comparator){
		if(!j$.isArray(parentList,childList))  throw exMessage;
			var lindex;
			for(lindex in childList){
					if(au.contains(parentList,childList[lindex],comparator))
						return true
			}
			return false;
	  }
	  au.select = function(list,criteria){
		if(!(j$.isArray(list) && j$.isFunction(criteria)))  throw exMessage;
		var length = list.length, index =-1, resultList = [];
		    while (++index<length) {
			  if(criteria(list[index],index)) resultList.push(list[index]);
			 }
		return resultList;
	  }
	  au.countMatches = function(list,criteria){
		return au.select(list,criteria).length;
	  }
	  au.matchAny = function(list,criteria){
		if(!(j$.isArray(list) && j$.isFunction(criteria)))  throw exMessage;
		var length = list.length, index =-1;
		    while (++index<length) {
			  if(criteria(list[index],index)) return true;
			 }
		return false;
	  }
	  au.matchAll = function(list,criteria){
		if(!(j$.isArray(list) && j$.isFunction(criteria)))  throw exMessage;
		var length = list.length, index =-1;
		    while (++index<length) {
			  if(!criteria(list[index],index)) return false;
			 }
		return true;
	  }
	  au.each = function(list,criteria){
		if(!(j$.isArray(list) && j$.isFunction(criteria)))  throw exMessage;
		var length = list.length, index =-1;
		    while (++index<length) {
			  criteria(list[index],index);
			 }
	  }
/** collectioin utils end **/

/** core j$ common methods **/
	
	//register is* utility methods. dont forget to document
	
	for(currentType in objTypes){
		(function(s){
			j$['is'+s] = function(obj){
				return toString.call(obj)  == '[object '+s+']';
			}
		})(objTypes[currentType]);
	}
		
   for(var tu in j$){
	if(tu.slice(0,2)==='is'){
		(function(existingDef){
			j$[tu] = function(){
			return argAdapter(existingDef,arguments);
		}	
		})(j$[tu]);
	}
   }
	argAdapter = function (func,args){
		for(var index in args){
			if(!func(args[index])) return false;
		}
		return args.length!=0;
	}
	j$.haveSameOrigin = function(obj1,obj2){
		return toString.call(obj1) == toString.call(obj2);
	}
	/** core j$ common methods end **/
 
window.jUtils = window.j$ = j$;
})(window);