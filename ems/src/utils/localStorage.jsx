const employee = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "123"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "password": "123"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "password": "123"
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "email": "bob.brown@example.com",
      "password": "123"
    },
    {
      "id": 5,
      "name": "Charlie Davis",
      "email": "charlie.davis@example.com",
      "password": "123"
    }
  ]
  

  const admin = [
    {
      "id": 1,
      "name": "Admin User",
      "email": "admin@example.com",
      "password": "123",
      "employees": [
        {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "password": "123",
          "tasks": [
            {
              "task_id": 1,
              "title": "Task 1",
              "description": "Description of Task 1",
              "category": "Development",
              "date": "2024-12-01",
              "new": true,
              "assigned": true,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 2,
              "title": "Task 2",
              "description": "Description of Task 2",
              "category": "Development",
              "date": "2024-12-02",
              "new": true,
              "assigned": true,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 3,
              "title": "Task 3",
              "description": "Description of Task 3",
              "category": "Design",
              "date": "2024-12-03",
              "new": true,
              "assigned": false,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "email": "jane.smith@example.com",
          "password": "123",
          "tasks": [
            {
              "task_id": 1,
              "title": "Task 1",
              "description": "Description of Task 1",
              "category": "Research",
              "date": "2024-12-04",
              "new": true,
              "assigned": false,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 2,
              "title": "Task 2",
              "description": "Description of Task 2",
              "category": "Research",
              "date": "2024-12-05",
              "new": true,
              "assigned": true,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 3,
              "title": "Task 3",
              "description": "Description of Task 3",
              "category": "Marketing",
              "date": "2024-12-06",
              "new": true,
              "assigned": true,
              "completed": true,
              "failed": false
            },
            {
              "task_id": 4,
              "title": "Task 4",
              "description": "Description of Task 4",
              "category": "Marketing",
              "date": "2024-12-07",
              "new": true,
              "assigned": false,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 3,
          "name": "Alice Johnson",
          "email": "alice.johnson@example.com",
          "password": "123",
          "tasks": [
            {
              "task_id": 1,
              "title": "Task 1",
              "description": "Description of Task 1",
              "category": "Analysis",
              "date": "2024-12-08",
              "new": true,
              "assigned": false,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 2,
              "title": "Task 2",
              "description": "Description of Task 2",
              "category": "Analysis",
              "date": "2024-12-09",
              "new": true,
              "assigned": false,
              "completed": true,
              "failed": false
            },
            {
              "task_id": 3,
              "title": "Task 3",
              "description": "Description of Task 3",
              "category": "Testing",
              "date": "2024-12-10",
              "new": true,
              "assigned": true,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 4,
              "title": "Task 4",
              "description": "Description of Task 4",
              "category": "Testing",
              "date": "2024-12-11",
              "new": true,
              "assigned": false,
              "completed": false,
              "failed": true
            }
          ]
        },
        {
          "id": 4,
          "name": "Bob Brown",
          "email": "bob.brown@example.com",
          "password": "123",
          "tasks": [
            {
              "task_id": 1,
              "title": "Task 1",
              "description": "Description of Task 1",
              "category": "Development",
              "date": "2024-12-12",
              "new": true,
              "assigned": true,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 2,
              "title": "Task 2",
              "description": "Description of Task 2",
              "category": "Development",
              "date": "2024-12-13",
              "new": true,
              "assigned": false,
              "completed": true,
              "failed": false
            },
            {
              "task_id": 3,
              "title": "Task 3",
              "description": "Description of Task 3",
              "category": "Design",
              "date": "2024-12-14",
              "new": true,
              "assigned": false,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 4,
              "title": "Task 4",
              "description": "Description of Task 4",
              "category": "Design",
              "date": "2024-12-15",
              "new": true,
              "assigned": true,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 5,
              "title": "Task 5",
              "description": "Description of Task 5",
              "category": "Testing",
              "date": "2024-12-16",
              "new": true,
              "assigned": false,
              "completed": false,
              "failed": true
            }
          ]
        },
        {
          "id": 5,
          "name": "Charlie Davis",
          "email": "charlie.davis@example.com",
          "password": "123",
          "tasks": [
            {
              "task_id": 1,
              "title": "Task 1",
              "description": "Description of Task 1",
              "category": "Development",
              "date": "2024-12-17",
              "new": true,
              "assigned": false,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 2,
              "title": "Task 2",
              "description": "Description of Task 2",
              "category": "Development",
              "date": "2024-12-18",
              "new": true,
              "assigned": true,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 3,
              "title": "Task 3",
              "description": "Description of Task 3",
              "category": "Marketing",
              "date": "2024-12-19",
              "new": true,
              "assigned": false,
              "completed": true,
              "failed": false
            },
            {
              "task_id": 4,
              "title": "Task 4",
              "description": "Description of Task 4",
              "category": "Marketing",
              "date": "2024-12-20",
              "new": true,
              "assigned": true,
              "completed": false,
              "failed": false
            },
            {
              "task_id": 5,
              "title": "Task 5",
              "description": "Description of Task 5",
              "category": "Testing",
              "date": "2024-12-21",
              "new": true,
              "assigned": false,
              "completed": false,
              "failed": true
            },
            {
              "task_id": 6,
              "title": "Task 6",
              "description": "Description of Task 6",
              "category": "Testing",
              "date": "2024-12-22",
              "new": true,
              "assigned": false,
              "completed": false,
              "failed": false
            }
          ]
        }
      ]
    }
  ]
  
  export const setLoaclStorage = ()=>{
 localStorage.setItem('employee',JSON.stringify(employee))
 localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage =() =>{
 const data = localStorage.getItem('employee')
 const admin = localStorage.getItem('admin')
  }