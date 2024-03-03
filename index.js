// 定义任务类
class Task {
    constructor(description, priority = "medium", status = "pending") {
        this.description = description;
        this.priority = priority;
        this.status = status;
    }
}

// 定义团队成员类
class TeamMember {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

// 定义项目管理工具类
class ProjectManagementTool {
    constructor() {
        this.tasks = [];
        this.teamMembers = [];
        this.projectAnalytics = {};
        this.flexible = true;
    }

    // 添加任务
    addTask(description, priority, status) {
        const task = new Task(description, priority, status);
        this.tasks.push(task);
    }

    // 添加团队成员
    addTeamMember(name, role) {
        const teamMember = new TeamMember(name, role);
        this.teamMembers.push(teamMember);
    }

    // 设置项目分析数据
    setProjectAnalytics(analytics) {
        this.projectAnalytics = analytics;
    }

    // 查看任务
    viewTasks() {
        console.log("Tasks:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} - Priority: ${task.priority}, Status: ${task.status}`);
        });
    }

    // 查看团队成员
    viewTeamMembers() {
        console.log("Team Members:");
        this.teamMembers.forEach((member, index) => {
            console.log(`${index + 1}. ${member.name} - Role: ${member.role}`);
        });
    }

    // 查看项目分析
    viewProjectAnalytics() {
        console.log("Project Analytics:");
        console.log(this.projectAnalytics);
    }

    // 增强团队生产力
    enhanceTeamProductivity() {
        console.log("Team productivity enhanced!");
    }

    // 通过灵活工具增强项目结果
    enhanceProjectOutcomes() {
        console.log("Project outcomes enhanced with our flexible tool!");
    }
}

// 示例用法
const projectManager = new ProjectManagementTool();

// 添加任务
projectManager.addTask("Design UI mockups", "high", "pending");
projectManager.addTask("Develop backend functionality", "medium", "in progress");
projectManager.addTask("Write documentation", "low", "completed");

// 添加团队成员
projectManager.addTeamMember("John Doe", "UI Designer");
projectManager.addTeamMember("Jane Smith", "Backend Developer");
projectManager.addTeamMember("Alice Johnson", "Technical Writer");

// 设置项目分析数据
projectManager.setProjectAnalytics({ progress: "50%", issues: 3 });

// 查看任务、团队成员和项目分析
projectManager.viewTasks();
projectManager.viewTeamMembers();
projectManager.viewProjectAnalytics();

// 增强团队生产力和项目结果
projectManager.enhanceTeamProductivity();
projectManager.enhanceProjectOutcomes();
