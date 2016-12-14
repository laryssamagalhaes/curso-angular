angular.module("MyModule")
.controller("indexController", function($scope){
	$scope.title = "Angular JS";
	$scope.students = [
		{ 
			name:"Laryssa",
			email: "laryssamagal@gmail.com",
			value1: 65,
			value2: 80,
			value3: 55
		}, 
		{ 
			name:"Camila",
			email: "camila@gmail.com",
			value1: 74,
			value2: 63,
			value3: 80
		}, 
		{ 
			name:"Eduardo",
			email: "eduardo@gmail.com",
			value1: 85,
			value2: 80,
			value3: 59
		}, 
		{ 
			name:"Felipe",
			email: "felipe@gmail.com",
			value1: 90,
			value2: 80,
			value3: 75
		}, 
	]

	var studentEdit;


	var init = function(){
		$scope.students.forEach(function(student){
			student.mean = mean(student);
		});
		clearForm();
	}

	var mean = function(student){
		var mean = (student.value1 +  student.value2 + student.value3)/3;
		return mean.toFixed(2);
	}

	$scope.openRegisterStudent = function(){
		$scope.edit = false;
		clearForm();
		$('#register').modal('open');
	}

	$scope.registerStudent = function(student){
		$scope.edit = false;
		student.mean = mean(student);
		$scope.students.push(student);
		$('#register').modal('close');
		clearForm();
	}

	$scope.editStudent = function(student){
		$scope.edit = true;
		angular.copy(student, $scope.student);
		$('#register').modal('open');
		studentEdit = student;
	}

	$scope.saveStudent = function(student){
		studentEdit.name = student.name;
		studentEdit.email = student.email;
		studentEdit.value1 = student.value1;
		studentEdit.value2 = student.value2;
		studentEdit.value3 = student.value3;
		studentEdit.mean = mean(student);
		$('#register').modal('close');
	}

	$scope.deleteStudent = function(student){
		for(var i in $scope.students){
			var aux = $scope.students[i];
			console.log(aux);
			if(student === aux){
				console.log('oi');
				console.log(i);
				$scope.alunos.splice(i, 1);
			}
		}
	}

	var clearForm = function(){
		$scope.student = { 
			name:"",
			email: "",
			value1: '',
			value2: '',
			value3: '',
			media: ''
		}
	}

	init();
})