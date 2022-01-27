function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (3명)";
	taskMap.startDate = "2022-01-15 20:54:00";
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.14", "2250만 골드", 17,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.10", " 925만 골드", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2022-01-15 20:50:00";
	taskList.push(new Array(type, "보루    ", "Lv. 4", " 720만 골드", 14,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 4", " 720만 골드", 14,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 4", " 720만 골드", 14,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2022-01-21 04:08:00";
	taskList.push(new Array(type, "보루    ", "Lv. 4", " 720만 골드", 14,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 4", " 720만 골드", 14,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2022-01-21 22:56:00";
	taskList.push(new Array(type, "박격포  ", "Lv.10", "1530만 골드", 16,  0));
	taskList.push(new Array(type, "박격포  ", "Lv.10", "1530만 골드", 16,  0));
	taskList.push(new Array(type, "박격포  ", "Lv.10", "1530만 골드", 16,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (4명)";
	taskMap.startDate = "2022-01-27 20:08:00";
	taskList.push(new Array(type, "저격타워", "Lv. 9", "1400만 골드", 13,  0));
	taskList.push(new Array(type, "저격타워", "Lv. 9", "1400만 골드", 13,  0));
	taskList.push(new Array(type, "저격타워", "Lv. 9", "1400만 골드", 13,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2022-01-12 23:52:00";
	taskList.push(new Array(type, "유명개틀", "Lv.15", "  25만 석유", 17, 14));
	taskList.push(new Array(type, "무장차량", "Lv.12", "27.2만 석유", 17, 14));
	taskList.push(new Array(type, "엠알엘  ", "Lv. 8", "  26만 석유", 17, 14));
	taskList.push(new Array(type, "노부나가", "Lv.21", "   5만 석유",  2, 20));
	taskList.push(new Array(type, "주코프  ", "Lv. 2", "  23만 식량",  0,  8));
	taskList.push(new Array(type, "주코프  ", "Lv. 3", "  50만 식량",  0,  8));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2022-01-22 20:20:00";
	taskList.push(new Array(type, "에이피씨", "Lv.10", "  27만 석유", 17, 14));
	taskList.push(new Array(type, "유명헬기", "Lv. 9", "  26만 석유", 17, 14));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

$(document).ready(function() {
	try {
		setTask11();
		setTask12();
		setTask13();
		setTask14();
		setTask15();
		setTask21();
		setTask22();
		setDominations();
	} catch (e){
		alert(e);
	}
});
