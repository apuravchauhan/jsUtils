		function arrayUtils(method, val, expected, msg){
			equal(j$.array[method](val), expected, method+" : "+msg+" ::: input="+val+" |expected="+expected);
		}
		function arrayUtils2args(method, val,val2, expected, msg){
			deepEqual(j$.array[method](val,val2), expected, method+" : "+msg+" ::: input="+val+", "+val2+"  |expected="+expected);
		}
		function arrayUtils3args(method, val,val2,val3, expected, msg){
			deepEqual(j$.array[method](val,val2,val3), expected, method+" : "+msg+" ::: input="+val+", "+val2+", "+val3+"  |expected="+expected);
		}

module("ArrayUtils Test Suite");
test( "Tests for indexOf", function() {
		
		//indexOf test cases
		arrayUtils2args('indexOf',[1,2,3,6,4],1,0,'primitive int datatype exists');
		arrayUtils2args('indexOf',[1,2,3,6,4],"1",-1,'primitive int/string datatype not exists');
		arrayUtils2args('indexOf',[1,2,3,6,4],3,2,'primitive int datatype exists');
		arrayUtils2args('indexOf',[1,2,3,4,4],4,3,'primitive int datatype exists multiple time picks first one');
		arrayUtils2args('indexOf',[1,2,3,6,4],8,-1,'test for primitive int datatype not exists');
		arrayUtils2args('indexOf',[],8,-1,'test for primitive int datatype not exists');
				
		arrayUtils2args('indexOf',['a','b','c','d','e'],'a',0,'primitive string datatype exists');
		arrayUtils2args('indexOf',['a','b','c','d','e'],'c',2,'primitive string datatype exists');
		arrayUtils2args('indexOf',['a','b','c','d','d'],'d',3,'primitive string datatype exists multiple time picks first one');
		arrayUtils2args('indexOf',['a','b','c','d','e'],'x',-1,'test for primitive string datatype not exists');

		throws(function(){j$.array.indexOf("apurav",'x')},"throws error message in case of invalid field type");
		
		arrayUtils2args('indexOf',['a','b','c','d','e'],new String("a"),0,'string obj/primitive datatype exists');
		arrayUtils2args('indexOf',['a','b',new String("c"),'d','e'],'c',2,'string obj/primitive datatype exists');
		arrayUtils2args('indexOf',['a','b',new String("1"),'d','e'],'1',2,'string obj/primitive datatype exists');

		arrayUtils2args('indexOf',[1,2,3,6,4],new Number(1),0,'primitive int/obj datatype exists');
		arrayUtils2args('indexOf',[1,2,3,6,4],new Number("1"),0,'primitive int/obj datatype not exists');
		arrayUtils2args('indexOf',[1,2,new Number("3"),6,4],3,2,'primitive int/obj datatype exists');

		arrayUtils2args('indexOf',[{id:1},2,3,6,4],1,-1,'default comparison doesnt finds object');
		arrayUtils2args('indexOf',[1,{id:3,name:'apurav'},3,6,4],2,-1,'default comparison doesnt find objects');
		arrayUtils3args('indexOf',[1,{id:3,name:'apurav'},3,6,4],3,function(src,target){
			if(src.id) return src.id ==target;
			return src== target;
		},1,'custom comparator to find the obj with given id');
		arrayUtils3args('indexOf',[{name:'shaveta'},{name:'apurav'},{name:'hardev'},{name:'satnam'}],'satnam',function(src,target){
			return src.name ==target;
			},3,'custom comparator to find the obj with given name');

	});

	test( "Tests for contains", function() {
		
		//contains test cases
		arrayUtils2args('contains',[1,2,3,6,4],1,true,'primitive int datatype exists');
		arrayUtils2args('contains',[1,2,3,6,4],"1",false,'primitive int/string datatype not exists');
		arrayUtils2args('contains',[1,2,3,6,4],3,true,'primitive int datatype exists');
		arrayUtils2args('contains',[1,2,3,4,4],4,true,'primitive int datatype exists multiple time picks first one');
		arrayUtils2args('contains',[1,2,3,6,4],8,false,'test for primitive int datatype not exists');
		arrayUtils2args('contains',[],8,false,'test for primitive int datatype not exists');
		arrayUtils2args('contains',[new String("apurav")],new String("apurav"),false,'test for pure object search fails with default comparator');
				
		arrayUtils2args('contains',['a','b','c','d','e'],'a',true,'primitive string datatype exists');
		arrayUtils2args('contains',['a','b','c','d','e'],'c',true,'primitive string datatype exists');
		arrayUtils2args('contains',['a','b','c','d','d'],'d',true,'primitive string datatype exists multiple time picks first one');
		arrayUtils2args('contains',['a','b','c','d','e'],'x',false,'test for primitive string datatype not exists');

		throws(function(){j$.array.indexOf("apurav",'x')},"throws error message in case of invalid field type");
		
		arrayUtils2args('contains',['a','b','c','d','e'],new String("a"),true,'string obj/primitive datatype exists');
		arrayUtils2args('contains',['a','b',new String("c"),'d','e'],'c',true,'string obj/primitive datatype exists');
		arrayUtils2args('contains',['a','b',new String("1"),'d','e'],'1',true,'string obj/primitive datatype exists');

		arrayUtils2args('contains',[1,2,3,6,4],new Number(1),true,'primitive int/obj datatype exists');
		arrayUtils2args('contains',[1,2,3,6,4],new Number("1"),true,'primitive int/obj datatype not exists');
		arrayUtils2args('contains',[1,2,new Number("3"),6,4],3,true,'primitive int/obj datatype exists');

		arrayUtils2args('contains',[{id:1},2,3,6,4],1,false,'default comparison doesnt finds object');
		arrayUtils2args('contains',[{id:1},2,3,6,4],{id:1},false,'default comparison doesnt finds object');
		arrayUtils2args('contains',[1,{id:3,name:'apurav'},3,6,4],2,false,'default comparison doesnt find objects');
		arrayUtils3args('contains',[1,{id:3,name:'apurav'},3,6,4],3,function(src,target){
			if(src.id) return src.id ==target;
			return src== target;
		},true,'custom comparator to find the obj with given id');
		arrayUtils3args('contains',[{name:'shaveta'},{name:'apurav'},{name:'hardev'},{name:'satnam'}],'satnam',function(src,target){
			return src.name ==target;
			},true,'custom comparator to find the obj with given name');
	});

	test( "Tests for merge", function() {
		var fx = j$.array.fx;
		//contains test cases
		arrayUtils2args('merge',[1,2],[1],[1,2,1],'merge two lists');
		arrayUtils2args('merge',[1,2,"a"],["c",1],[1,2,"a","c",1],'merge two lists');
		arrayUtils3args('merge',[1,2],[1],fx.uniqueMerger,[1,2],'merge two lists w/o duplicates');
		arrayUtils3args('merge',[1,2,"a"],["c",1],fx.uniqueMerger,[1,2,"a","c"],'merge two lists w/o dups');
	    
		var a = new String("a"), b  = new String("a");
		arrayUtils2args('merge',[a],[b],[a,b],'merge pure objs');
       	arrayUtils2args('merge',[1,2,{a:1,b:2}],["c",1],[1,2,{a:1,b:2},"c",1],'merge two lists');
		arrayUtils2args('merge',[],[],[],'merge empty array');
		arrayUtils2args('merge',[1,2,{a:1,b:2}],[{a:1,b:2},1],[1,2,{a:1,b:2},{a:1,b:2},1],'obj types not filtered by default');
		arrayUtils3args('merge',[{a:1,b:2}],[{a:1,b:2}],function(list, obj){
			for(var i in list){
				if(list[i].a == obj.a && list[i].b  == obj.b) return false;
			}
			return true;
			},[{a:1,b:2}],'obj types filtered by custom merge condition to allow unique elements');

		arrayUtils3args('merge',[{a:1,b:2},{a:23,b:2}],[{a:1,b:2},{a:23,b:3}],function(list, obj){
			for(var i in list){
				if(list[i].a == obj.a && list[i].b  == obj.b) return false;
			}
			return true;
			},[{a:1,b:2},{a:23,b:2},{a:23,b:3}],'obj types filtered by custom merge condition to allow unique elements');
		


		throws(function(){j$.array.merge("apurav",'x')},"throws error message in case of invalid field type");
		throws(function(){j$.array.merge([9],'x')},"throws error message in case of invalid field type");
		
		
	});

	test( "Intersection Tests", function() {
		
		//intersect test cases
		arrayUtils2args('intersect',[1,2],[1],[1],'intersect basic');
		arrayUtils2args('intersect',["c",1],[1,2,"a"],[1],'intersect basic');
		arrayUtils2args('intersect',["c","a",1],[1,2,"a"],[1,"a"],'intersect mix ');
		arrayUtils2args('intersect',[new String("a")],[new String("a")],[],'intersect doesnt work in case of pure obj comparison');
        arrayUtils2args('intersect',[1,2,new String("a")],["c","a",1],["a",1],'intersect mix with objs');
        arrayUtils2args('intersect',[1,1,2],[1,1,2,2],[1,1,2],'intersect basic');
		arrayUtils2args('intersect',[],[],[],'intersect empty array');
		arrayUtils2args('intersect',[{a:1}],[{a:1}],[],'intersect will not occur with complex objects');
		arrayUtils3args('intersect',[{a:1}],[{a:1}],function(obj1,obj2){
			if(obj1.a == obj2.a) return true;
			return false
		},[{a:1}],'intersect test with custom equals function');
		throws(function(){j$.array.intersect("apurav",'x')},"throws error message in case of invalid field type");
		throws(function(){j$.array.intersect([9],'x')},"throws error message in case of invalid field type");
		
		
	});

	test( "Subtraction Tests", function() {
		
		//subtract test cases
		arrayUtils2args('subtract',[1,2],[1],[2],'subtract basic');
		arrayUtils2args('subtract',[1,2],[1,2],[],'subtract basic no item left');
		arrayUtils2args('subtract',["c",1],[1,2,"a"],["c"],'subtract basic');
		arrayUtils2args('subtract',["c","a",1],[1,2,"a"],["c"],'subtract mix ');
		var a = new String("a"), b  = new String("a");
		arrayUtils2args('subtract',[a],[b],[a],'subtract doesnt work in case of pure obj comparison');
        arrayUtils2args('subtract',[1,2,new String("a")],["c","a",1],[2],'subtract mix with objs');
        arrayUtils2args('subtract',[1,1,2],[1,1,2,2],[],'subtract basic');
		arrayUtils2args('subtract',[1,1,2],[1,2],[1],'subtract basic');
		arrayUtils2args('subtract',[],[],[],'subtract basic');
		arrayUtils2args('subtract',[{a:1}],[{a:1}],[{a:1}],'subtract will not occur with complex objects');
		arrayUtils3args('subtract',[{a:1}],[{a:1}],function(obj1,obj2){
			if(obj1.a == obj2.a) return true;
			return false
		},[],'subtract test with custom equals function');
		throws(function(){j$.array.subtract("apurav",'x')},"throws error message in case of invalid field type");
		throws(function(){j$.array.subtract([9],'x')},"throws error message in case of invalid field type");
		
		
	});
	test( "Sublist Tests", function() {
		
		//isSublist test cases
		arrayUtils2args('isSublist',[1,2,5],[1,2],true,'basic sublist test');
		arrayUtils2args('isSublist',["c",1],[1,2,"a"],false,'sublist basic int/string mix test');
		arrayUtils2args('isSublist',["c","a",1],["c","a",1],true,'mix sublist test ');
		arrayUtils2args('isSublist',["c","a",1],["c","a",1,"c"],false,'mix sublist test with missing element');
		arrayUtils2args('isSublist',["c","a",1,7,9,9],["c","a",1,9,9],true,'mix sublist test with element present');
		arrayUtils2args('isSublist',[12,67],[67,12],true,'sublist test for same elements');
		
		var a = new String("a"), b  = new String("a");
		
		arrayUtils2args('isSublist',[a],[b],false,'sublist doesnt work in case of pure obj comparison');
		arrayUtils2args('isSublist',[a,b],[a],true,'sublist works in case of refs pointing to same objs ');
        arrayUtils2args('isSublist',[1,1,new Number(2)],[2],true,'sublist basic');
		arrayUtils2args('isSublist',[],[],true,'sublist for empty basic');
		arrayUtils2args('isSublist',[{a:1}],[{a:1}],false,'sublist will not occur with complex objects');
		arrayUtils3args('isSublist',[{a:1},{a:2}],[{a:1}],function(obj1,obj2){
			if(obj1.a == obj2.a) return true;
			return false
		},true,'sublist test with custom equals function succeeds');
		throws(function(){j$.array.isSublist("apurav",'x')},"throws error message in case of invalid field type");
		throws(function(){j$.array.isSublist([9],'x')},"throws error message in case of invalid field type");
		
		
	});
	test( "Equals Tests", function() {
		var fx = j$.array.fx;
		//intersect test cases
		arrayUtils2args('equals',[1,2],[1,2],true,'equals basic');
		arrayUtils2args('equals',["c",1],[1,2,"a"],false,'equals basic int/string mix test');
		arrayUtils2args('equals',["c","a",1],["c","a",1],true,'equals mix ');
		var a = new String("a"), b  = new String("a");
		
		arrayUtils2args('equals',[a],[b],false,'equals doesnt work in case of pure obj comparison');
		arrayUtils2args('equals',[a],[a],true,'equals work in case of objs pointing to same objs');
        arrayUtils2args('equals',[1,1,new Number(2)],[1,1,2],true,'equals basic');
		arrayUtils2args('equals',[],[],true,'equals basic');
		arrayUtils2args('equals',[{a:1}],[{a:1}],false,'equals will not occur with complex objects');
		arrayUtils3args('equals',[{a:1}],[{a:1}],function(obj1,obj2){
			if(obj1.a == obj2.a) return true;
			return false
		},true,'equals test with custom equals function');
		throws(function(){j$.array.equals("apurav",'x')},"throws error message in case of invalid field type");
		throws(function(){j$.array.equals([9],'x')},"throws error message in case of invalid field type");
		
		
	});

	test( "containsAny Tests", function() {
		
		//intersect test cases
		arrayUtils2args('containsAny',[1,2],[1,2],true,'containsAny basic');
		arrayUtils2args('containsAny',["c",1],[1,2,"a"],true,'containsAny basic int/string mix test');
		arrayUtils2args('containsAny',["c","a",1],["c","a",1],true,'containsAny mix ');
		var a = new String("a"), b  = new String("a");
		
		arrayUtils2args('containsAny',[a],[b],false,'containsAny doesnt work in case of pure obj comparison');
		arrayUtils2args('containsAny',[a],[a,b],true,'containsAny work in case of objs pointing to same objs');
        arrayUtils2args('containsAny',[1,1,new Number(2)],[2],true,'containsAny basic works for primitive and obj comparison');
		arrayUtils2args('containsAny',[],[],false,'containsAny basic');
		arrayUtils2args('containsAny',[{a:1}],[{a:1}],false,'containsAny will not occur with complex objects');
		arrayUtils3args('containsAny',[{a:1}],[{a:1}],function(obj1,obj2){
			if(obj1.a == obj2.a) return true;
			return false
		},true,'containsAny test with custom equals function');
		throws(function(){j$.array.equals("apurav",'x')},"throws error message in case of invalid field type");
		throws(function(){j$.array.equals([9],'x')},"throws error message in case of invalid field type");
		
		
	});

	test( "select Tests", function() {
		
		//select test cases
		arrayUtils2args('select',[1,2,1,13,4],function(element,index){
			if(element == 1) return true;
			return false;
		},[1,1],'select all 1s');
		arrayUtils2args('select',[1,2,1,13,4],function(element,index){
			index++;
			if(index%2==0) return true;
			return false;
		},[2,13],'select all elements at even places');
		
		arrayUtils2args('select',[{name:'apu'},{name:'ranjit'},{name:'aman'},{name:'satnam'},{name:'satnam'}],function(element,index){
			if(element.name == 'satnam') return true;
			return false;
		},[{name:'satnam'},{name:'satnam'}],'select all elements with name satnam');
		arrayUtils2args('select',[{name:'apu'},{name:'ranjit'},{name:'aman'},{name:'satnam'},{name:'satnam'}],function(element,index){
			if(element.name == 'apurav') return true;
			return false;
		},[],'select all elements with name apurav');
		

		throws(function(){j$.array.select("apurav",'x')},"throws error message in case of invalid field type");
		throws(function(){j$.array.select([9],'x')},"throws error message in case of invalid field type");
		
		
	});
	test( "countMatches Tests", function() {
		
		//select test cases
		arrayUtils2args('countMatches',[1,2,1,13,4],function(element,index){
			if(element == 1) return true;
			return false;
		},2,'countMatches all 1s');
		arrayUtils2args('countMatches',[1,2,1,13,4],function(element,index){
			index++;
			if(index%2==0) return true;
			return false;
		},2,'countMatches all elements at even places');
		
		arrayUtils2args('countMatches',[{name:'apu'},{name:'ranjit'},{name:'aman'},{name:'satnam'},{name:'satnam'}],function(element,index){
			if(element.name == 'satnam') return true;
			return false;
		},2,'countMatches all elements with name satnam');
		
		arrayUtils2args('countMatches',[{name:'apu'},{name:'ranjit'},{name:'aman'},{name:'satnam'},{name:'satnam'}],function(element,index){
			if(element.name == 'apurav') return true;
			return false;
		},0,'countMatches all elements with name apurav');
		

		throws(function(){j$.array.countMatches("apurav",'x')},"throws error message in case of invalid field type");
		throws(function(){j$.array.countMatches([9],'x')},"throws error message in case of invalid field type");
		
		
	});
	test( "matchAny Tests", function() {
		
		//select test cases
		arrayUtils2args('matchAny',[1,2,1,13,4],function(element,index){
			if(element == 1) return true;
			return false;
		},true,'matches 1');
				
		arrayUtils2args('matchAny',[{name:'apu'},{name:'ranjit'},{name:'aman'},{name:'satnam'},{name:'satnam'}],function(element,index){
			if(element.name == 'satnam') return true;
			return false;
		},true,'matchAny for an object containing name satnam');
		
		arrayUtils2args('matchAny',[{name:'apu'},{name:'ranjit'},{name:'aman'},{name:'satnam'},{name:'satnam'}],function(element,index){
			if(element.name == 'apurav') return true;
			return false;
		},false,'matchAny fails to find an object with name apurav');
		

		throws(function(){j$.array.matchAny("apurav",'x')},"throws error message in case of invalid field type");
		throws(function(){j$.array.matchAny([9],'x')},"throws error message in case of invalid field type");
		
		
	});

	test( "matchAll Tests", function() {
		
		//select test cases
		arrayUtils2args('matchAll',[1,2,1,13,4],function(element,index){
			if(element == 1) return true;
			return false;
		},false,'matches only 2 elements');
				
		arrayUtils2args('matchAll',[{name:'apu'},{name:'ranjit'},{name:'aman'},{name:'satnam'},{name:'satnam'}],function(element,index){
			if(element.name == 'satnam') return true;
			return false;
		},false,'matches only 2 elements');
		
		arrayUtils2args('matchAll',[{name:'apu'},{name:'apu'},{name:'apu'},{name:'apu'},{name:'apu'}],function(element,index){
			if(element.name == 'apu') return true;
			return false;
		},true,'matches all the elements');
		arrayUtils2args('matchAll',[2,4,6,8],function(element,index){
			if(element%2==0) return true;
			return false;
		},true,'all matches for 2s multiplier');
		

		throws(function(){j$.array.matchAll("apurav",'x')},"throws error message in case of invalid field type");
		throws(function(){j$.array.matchAll([9],'x')},"throws error message in case of invalid field type");
		
		
	});

	test( "each Tests", function() {
		
		//each test cases
		var process = [];
		j$.array.each([1,2,3,4],function(ele){
			process.push(ele+1);
		});
		deepEqual(process, [2,3,4,5], "each method increments every element by 1");
		var inputList = [{name:'apu'},{name:'hardev'}];
		j$.array.each(inputList,function(ele){
			ele.name = 'satnam'
		});
		deepEqual(inputList, [{name:'satnam'},{name:'satnam'}], "each method changes the state of each object in array");
				
	

		throws(function(){j$.array.each("apurav",'x')},"throws error message in case of invalid field type");
		throws(function(){j$.array.each([9],'x')},"throws error message in case of invalid field type");
		
		
	});