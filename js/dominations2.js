function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2024-04-28 20:46:00";
	taskList.push(new Array(type, "전차격납", "Lv.19", "2750만 골드", 21,  0));
	taskList.push(new Array(type, "전차격납", "Lv.19", "2750만 골드", 21,  0));
	taskList.push(new Array(type, "전차격납", "Lv.19", "2750만 골드", 21,  0));
	taskList.push(new Array(type, "전차격납", "Lv.19", "2750만 골드", 21,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 14, 10));
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 14, 10));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2024-04-30 22:46:00";
	taskList.push(new Array(type, "사령부  ", "Lv.14", "1500만 식량", 16,  0));
	taskList.push(new Array(type, "지뢰네개", "Lv.15", "2800만 식량", 11, 15));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2024-04-21 02:07:00";
	taskList.push(new Array(type, "용병캠프", "Lv.16", "2100만 식량", 17,  0));
	taskList.push(new Array(type, "타워    ", "Lv.17", "2100만 골드", 14,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (4명)";
	taskMap.startDate = "2024-04-26 20:17:00";
	taskList.push(new Array(type, "타워    ", "Lv.17", "2100만 골드", 14,  0));
	taskList.push(new Array(type, "타워    ", "Lv.17", "2100만 골드", 14,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (3명)";
	taskMap.startDate = "2024-04-14 16:30:00";
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "유정    ", "Lv.17", "2600만 골드", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2024-04-20 21:30:00";
	taskList.push(new Array(type, "사보타주", "Lv.10", "1200만 식량", 11, 22));
	taskList.push(new Array(type, "보병    ", "Lv.16", "1800만 식량", 16, 16));
	taskList.push(new Array(type, "궁병    ", "Lv.16", "1800만 식량", 16, 16));
	taskList.push(new Array(type, "전차    ", "Lv.16", "2350만 식량", 16, 16));
	taskList.push(new Array(type, "포병대  ", "Lv.16", "2350만 식량", 16, 16));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2024-04-28 20:00:00";
	taskList.push(new Array(type, "정찰기  ", "Lv. 5", "  20만 석유",  9, 20));
	taskList.push(new Array(type, "정찰기  ", "Lv. 6", "  20만 석유",  9, 20));
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
	} catch (e) {
		alert(e);
	}
});
