const employees = [
    {
      "id": 1,
      "email": "rahul.sharma@company.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Login UI",
          "taskDescription": "Design responsive login page in React",
          "taskDate": "2026-02-18",
          "category": "Frontend"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Fix Navbar Bug",
          "taskDescription": "Resolve mobile overflow issue",
          "taskDate": "2026-02-19",
          "category": "Bug Fix"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Setup Tailwind",
          "taskDescription": "Install and configure Tailwind CSS",
          "taskDate": "2026-02-15",
          "category": "Setup"
        }
      ]
    },

    {
      "id": 2,
      "email": "priya.verma@company.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Dashboard Cards",
          "taskDescription": "Add stats cards UI",
          "taskDate": "2026-02-18",
          "category": "UI Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Color Theme Setup",
          "taskDescription": "Implement dark/light mode colors",
          "taskDate": "2026-02-14",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Chart Integration",
          "taskDescription": "Add analytics chart using chart.js",
          "taskDate": "2026-02-16",
          "category": "Frontend"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Profile Page",
          "taskDescription": "Create employee profile layout",
          "taskDate": "2026-02-20",
          "category": "Frontend"
        }
      ]
    },

    {
      "id": 3,
      "email": "aman.singh@company.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "API Integration",
          "taskDescription": "Connect login API",
          "taskDate": "2026-02-18",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Axios Setup",
          "taskDescription": "Setup axios instance",
          "taskDate": "2026-02-13",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Token Auth",
          "taskDescription": "Implement JWT authentication",
          "taskDate": "2026-02-16",
          "category": "Security"
        }
      ]
    },

    {
      "id": 4,
      "email": "neha.kapoor@company.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Testing Components",
          "taskDescription": "Test reusable components",
          "taskDate": "2026-02-18",
          "category": "Testing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Accessibility Fix",
          "taskDescription": "Improve aria labels",
          "taskDate": "2026-02-19",
          "category": "Quality"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Form Validation",
          "taskDescription": "Add validation to forms",
          "taskDate": "2026-02-14",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Cross Browser Test",
          "taskDescription": "Check UI in Safari",
          "taskDate": "2026-02-16",
          "category": "Testing"
        }
      ]
    },

    {
      "id": 5,
      "email": "vikas.gupta@company.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Deploy Project",
          "taskDescription": "Deploy on Vercel",
          "taskDate": "2026-02-21",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Env Setup",
          "taskDescription": "Configure environment variables",
          "taskDate": "2026-02-13",
          "category": "DevOps"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Performance Optimization",
          "taskDescription": "Reduce bundle size",
          "taskDate": "2026-02-22",
          "category": "Optimization"
        }
      ]
    }
  ]



  const admin =  [
    {
    "id": 101,
    "email": "admin@company.com",
    "password": "123"
    }
]

export const  setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}


export const  getLocalStorage = ()=>{
 const employees = JSON.parse(localStorage.getItem('employees'));
 const admin = JSON.parse(localStorage.getItem('admin'));
 return {employees,admin}
 
}