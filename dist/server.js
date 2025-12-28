/**
 * Express Server
 * Backend API for Financial Research Analyst
 */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import analysisRoutes from './routes/analysis.js';
// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api', analysisRoutes);
// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Financial Research Analyst API is running',
        timestamp: new Date().toISOString()
    });
});
// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Financial Research Analyst API',
        version: '2.0.0',
        endpoints: {
            health: '/api/health',
            analyze: 'POST /api/analyze',
            analyzeStream: 'POST /api/analyze/stream'
        }
    });
});
// Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    const status = err.status || 500;
    res.status(status).json({
        status: 'error',
        message: err.message || 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
};
app.use(errorHandler);
// Start server
app.listen(PORT, () => {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Financial Research Analyst API Server`);
    console.log(`${'='.repeat(60)}`);
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
    console.log(`${'='.repeat(60)}\n`);
});
//# sourceMappingURL=server.js.map