function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (4명)";
	taskMap.startDate = "2023-05-01 19:30:00";
	taskList.push(new Array(type, "의회    ", "Lv. 7", "2100만 골드", 17,  0));
	taskList.push(new Array(type, "사령부  ", "Lv.10", "1100만 식량", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2023-05-15 23:20:00";
	taskList.push(new Array(type, "벙커    ", "Lv. 2", "  12만 석유",  8,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 3", "  19만 석유", 10,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 4", "  23만 석유", 12,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 5", "25.5만 석유", 13,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 6", "26.5만 석유", 14,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 7", "  27만 석유", 15, 12));
	taskList.push(new Array(type, "벙커    ", "Lv. 8", "  28만 석유", 16,  0));
	taskList.push(new Array(type, "벙커    ", "Lv. 9", "  30만 석유", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (6명)";
	taskMap.startDate = "2023-05-15 23:32:00";
	taskList.push(new Array(type, "수비대  ", "Lv.12", "1400만 골드", 14,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.12", "1400만 골드", 14,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.13", "1600만 골드", 15, 12)); // 미확인
	taskList.push(new Array(type, "수비대  ", "Lv.14", "1800만 골드", 16,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (3명)";
	taskMap.startDate = "2023-05-10 22:41:00";
	taskList.push(new Array(type, "대전차포", "Lv.10", "1600만 골드", 16, 12));
	taskList.push(new Array(type, "대전차포", "Lv.11", "1900만 골드", 17,  0));
	taskList.push(new Array(type, "대전차포", "Lv.12", "2200만 골드", 18,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (2명)";
	taskMap.startDate = "2023-05-01 19:32:00";
	taskList.push(new Array(type, "미샬포대", "Lv.11", "1020만 골드", 15, 12));
	taskList.push(new Array(type, "미샬포대", "Lv.11", "1020만 골드", 15, 12));
	taskList.push(new Array(type, "미샬포대", "Lv.11", "1020만 골드", 15, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2023-05-10 22:41:00";
	taskList.push(new Array(type, "미국    ", "Lv. 8", "  12만 석유", 11, 11));
	taskList.push(new Array(type, "몽골    ", "Lv. 8", " 720만 골드", 11, 11));
	taskList.push(new Array(type, "체로키  ", "Lv. 8", " 720만 골드", 11, 11));
	taskList.push(new Array(type, "에티오피", "Lv. 8", "  12만 석유", 11, 11));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2023-05-05 03:01:00";
	taskList.push(new Array(type, "이집트  ", "Lv. 8", " 720만 골드", 11, 11));
	taskList.push(new Array(type, "마오리  ", "Lv. 8", " 720만 골드", 11, 11));
	taskList.push(new Array(type, "인도    ", "Lv. 8", " 720만 골드", 11, 11));
	taskList.push(new Array(type, "러시아  ", "Lv. 8", " 720만 골드", 11, 11));
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
