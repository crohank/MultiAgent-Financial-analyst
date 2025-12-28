/**
 * Python Service
 * Executes Python analysis script and captures output in real-time
 */
export interface ProgressData {
    step: string;
    message: string;
    timestamp: number;
}
export interface AnalysisResult {
    recommendation: string;
    confidence_score: number;
    scenarios: Record<string, {
        return: number;
        prob: number;
    }>;
    memo: string;
    market_data?: Record<string, any>;
    macro_data?: Record<string, any>;
    risk_analysis?: Record<string, any>;
    timing?: Record<string, number>;
    progressMessages?: ProgressData[];
    parseError?: string;
}
/**
 * Run Python analysis with real-time output capture
 */
export declare function runAnalysis(ticker: string, horizon: string, riskProfile: string, onProgress?: ((data: ProgressData) => void) | null): Promise<AnalysisResult>;
//# sourceMappingURL=pythonService.d.ts.map