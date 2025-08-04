project-management/
│
├── config/
│   └── db.js                    # MongoDB connection setup
│
├── controllers/
│   └── authController.js         # Handle user registration and login
│   └── projectController.js      # Handle CRUD operations for projects
│   └── taskController.js         # Handle CRUD operations for tasks
│
├── models/
│   └── User.js                  # User schema and model
│   └── Project.js               # Project schema and model
│   └── Task.js                  # Task schema and model
│
├── routes/
│   └── authRoutes.js            # Routes for user authentication
│   └── projectRoutes.js         # Routes for project CRUD operations
│   └── taskRoutes.js            # Routes for task CRUD operations
│
├── middleware/
│   └── authMiddleware.js        # JWT authentication middleware
│   └── authorizationMiddleware.js # Ownership-based authorization middleware
│
├── .env                         # Environment variables (e.g., MongoDB URI, JWT secret)
├── node_modules/                # NPM packages
├── package.json                 # NPM dependencies and scripts
├── server.js                    # Main Express app entry point
└── README.md                    # Project documentation
