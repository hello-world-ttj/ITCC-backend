/**
 * @swagger
 * tags:
 *   - name: Admin
 *     description: Admin related endpoints
 */

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Admin login
 *     description: API endpoint for admin login
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "ttj@duck.com"
 *               password:
 *                 type: string
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /admin:
 *   post:
 *     summary: Create a new admin
 *     description: API endpoint to create a new admin
 *     tags:
 *       - Admin
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "admin@example.com"
 *               phone:
 *                 type: string
 *                 example: "+123456789"
 *               password:
 *                 type: string
 *                 example: "password123"
 *               role:
 *                 type: string
 *                 example: "666c1a3895a6b176b7f2bcf7"
 *     responses:
 *       200:
 *         description: Admin created successfullyy
 *       400:
 *         description: Bad request
 *   get:
 *     summary: Get an admin
 *     description: API endpoint to get an existing admin
 *     tags:
 *       - Admin
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Admin retrieved successfullyy
 *       404:
 *         description: Admin not found
 */

/**
 * @swagger
 * /admin/list:
 *   get:
 *     summary: Get a list of admins
 *     description: Retrieves a paginated list of admins with optional filtering by status.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: pageNo
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination (defaults to 1)
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Filter admins by status
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of admins per page (defaults to 10)
 *     responses:
 *       200:
 *         description: successfullyy retrieved the list of admins
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /admin/profile/{id}:
 *   get:
 *     summary: Get a Admin by ID
 *     description: Retrieves a admin's details based on the provided admin ID. Access is restricted based on permissions.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the admin to retrieve
 *         schema:
 *           type: string
 *           example: "6123abc456def7890ghi1234"
 *     responses:
 *       200:
 *         description: Admin found successfullyy
 *       400:
 *         description: Admin ID is missing
 *       403:
 *         description: Forbidden, admin lacks permissions
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /admin/profile/{id}:
 *   put:
 *     summary: Update an existing admin
 *     description: API endpoint to update an existing admin
 *     tags:
 *       - Admin
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Jane Doe"
 *               email:
 *                 type: string
 *                 example: "admin_updated@example.com"
 *               phone:
 *                 type: string
 *                 example: "+987654321"
 *               password:
 *                 type: string
 *                 example: "newpassword456"
 *               role:
 *                 type: string
 *                 example: "666c1a3895a6b176b7f2bcf7"
 *     responses:
 *       200:
 *         description: Admin updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Admin not found
 */

/**
 * @swagger
 * /admin/profile/{id}:
 *   delete:
 *     summary: Delete an existing admin
 *     description: API endpoint to delete an existing admin by their unique identifier
 *     tags:
 *       - Admin
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the admin to be deleted
 *     responses:
 *       200:
 *         description: Admin deleted successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/list:
 *   get:
 *     summary: Get a list of admins
 *     description: Retrieves a paginated list of admins with optional filtering by status.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: pageNo
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination (defaults to 1)
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Filter admins by status
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of admins per page (defaults to 10)
 *     responses:
 *       200:
 *         description: successfullyy retrieved the list of admins
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /admin/log-activities:
 *   get:
 *     summary: Fetch and print log activities
 *     description: Retrieves and prints a paginated list of log activities with optional filtering.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination (defaults to 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of log activities per page (defaults to 10)
 *       - in: query
 *         name: filter
 *         schema:
 *           type: string
 *         description: JSON string to filter log activities
 *     responses:
 *       200:
 *         description: Successfully retrieved and printed the list of log activities
 *       404:
 *         description: No log activities found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /admin/log-activities/{id}:
 *   get:
 *     summary: Fetch a specific log activity by its ID
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the log activity
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully fetched the log activity
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 status:
 *                   type: string
 *                 httpMethod:
 *                   type: string
 *       404:
 *         description: Log activity not found
 *       500:
 *         description: Internal Server Error
 */
