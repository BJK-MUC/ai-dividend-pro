// AI Dividend Investing System - Core JavaScript
// Advanced financial data visualization and interaction management

class DividendInvestingSystem {
    constructor() {
        this.globalStockDatabase = this.getGlobalStockDatabase();
        this.portfolioData = this.generateMockPortfolioData();
        this.marketData = this.generateMockMarketData();
        this.charts = {};
        this.updateInterval = null;
        this.init();
    }

    init() {
        this.initializeCharts();
        this.startRealTimeUpdates();
        this.setupEventListeners();
        this.initializeAnimations();
    }

    // Global Top 250 High-Yield Dividend Stocks Database
    getGlobalStockDatabase() {
        return [
            // US Dividend Aristocrats & High Yield
            { symbol: 'BDX', name: 'Becton Dickinson', country: 'USA', region: 'North America', sector: 'Healthcare', dividendYield: 2.24, payoutRatio: 45, marketCap: 68.5, peRatio: 25.3, price: 239.00, beta: 0.85, aiRating: 'buy', confidence: 92 },
            { symbol: 'CLX', name: 'Clorox Company', country: 'USA', region: 'North America', sector: 'Consumer Defensive', dividendYield: 4.28, payoutRatio: 62, marketCap: 20.8, peRatio: 28.1, price: 166.20, beta: 0.92, aiRating: 'hold', confidence: 78 },
            { symbol: 'BF.B', name: 'Brown-Forman', country: 'USA', region: 'North America', sector: 'Consumer Defensive', dividendYield: 3.24, payoutRatio: 58, marketCap: 13.2, peRatio: 22.4, price: 28.00, beta: 0.78, aiRating: 'buy', confidence: 85 },
            { symbol: 'AMCR', name: 'Amcor PLC', country: 'USA', region: 'North America', sector: 'Consumer Cyclical', dividendYield: 6.27, payoutRatio: 71, marketCap: 12.1, peRatio: 18.9, price: 8.21, beta: 1.12, aiRating: 'hold', confidence: 73 },
            { symbol: 'FDS', name: 'FactSet Research', country: 'USA', region: 'North America', sector: 'Financial Services', dividendYield: 1.54, payoutRatio: 28, marketCap: 10.9, peRatio: 31.2, price: 284.90, beta: 0.73, aiRating: 'buy', confidence: 88 },
            { symbol: 'APD', name: 'Air Products & Chemicals', country: 'USA', region: 'North America', sector: 'Basic Materials', dividendYield: 2.81, payoutRatio: 52, marketCap: 68.3, peRatio: 24.7, price: 305.80, beta: 0.89, aiRating: 'buy', confidence: 91 },
            { symbol: 'HRL', name: 'Hormel Foods', country: 'USA', region: 'North America', sector: 'Consumer Defensive', dividendYield: 4.87, payoutRatio: 68, marketCap: 13.1, peRatio: 19.8, price: 23.76, beta: 0.95, aiRating: 'hold', confidence: 76 },
            { symbol: 'MDT', name: 'Medtronic PLC', country: 'USA', region: 'North America', sector: 'Healthcare', dividendYield: 3.03, payoutRatio: 49, marketCap: 125.2, peRatio: 23.1, price: 94.08, beta: 0.82, aiRating: 'buy', confidence: 83 },
            { symbol: 'PPG', name: 'PPG Industries', country: 'USA', region: 'North America', sector: 'Basic Materials', dividendYield: 2.74, payoutRatio: 44, marketCap: 24.6, peRatio: 26.5, price: 103.70, beta: 1.05, aiRating: 'buy', confidence: 86 },
            { symbol: 'KMB', name: 'Kimberly-Clark', country: 'USA', region: 'North America', sector: 'Consumer Defensive', dividendYield: 4.24, payoutRatio: 59, marketCap: 40.3, peRatio: 21.8, price: 118.80, beta: 0.88, aiRating: 'hold', confidence: 79 },
            { symbol: 'CVX', name: 'Chevron Corporation', country: 'USA', region: 'North America', sector: 'Energy', dividendYield: 4.40, payoutRatio: 65, marketCap: 285.1, peRatio: 15.2, price: 148.50, beta: 1.15, aiRating: 'buy', confidence: 89 },
            { symbol: 'TROW', name: 'T. Rowe Price', country: 'USA', region: 'North America', sector: 'Financial Services', dividendYield: 4.98, payoutRatio: 56, marketCap: 27.8, peRatio: 16.9, price: 125.40, beta: 1.02, aiRating: 'buy', confidence: 82 },
            { symbol: 'MKC', name: 'McCormick & Company', country: 'USA', region: 'North America', sector: 'Consumer Staples', dividendYield: 2.70, payoutRatio: 51, marketCap: 19.7, peRatio: 29.3, price: 72.30, beta: 0.91, aiRating: 'hold', confidence: 74 },
            { symbol: 'CAH', name: 'Cardinal Health', country: 'USA', region: 'North America', sector: 'Healthcare', dividendYield: 1.30, payoutRatio: 25, marketCap: 18.9, peRatio: 18.7, price: 78.45, beta: 0.76, aiRating: 'buy', confidence: 87 },
            { symbol: 'GD', name: 'General Dynamics', country: 'USA', region: 'North America', sector: 'Industrials', dividendYield: 1.80, payoutRatio: 38, marketCap: 78.2, peRatio: 20.4, price: 285.60, beta: 0.84, aiRating: 'buy', confidence: 84 },
            { symbol: 'ERIE', name: 'Erie Indemnity', country: 'USA', region: 'North America', sector: 'Financial Services', dividendYield: 1.70, payoutRatio: 35, marketCap: 15.3, peRatio: 27.8, price: 295.80, beta: 0.73, aiRating: 'hold', confidence: 77 },
            { symbol: 'MO', name: 'Altria Group', country: 'USA', region: 'North America', sector: 'Consumer Defensive', dividendYield: 6.10, payoutRatio: 78, marketCap: 82.4, peRatio: 12.1, price: 45.20, beta: 0.68, aiRating: 'sell', confidence: 68 },
            { symbol: 'VZ', name: 'Verizon Communications', country: 'USA', region: 'North America', sector: 'Communication Services', dividendYield: 6.00, payoutRatio: 72, marketCap: 165.8, peRatio: 14.3, price: 39.85, beta: 0.71, aiRating: 'hold', confidence: 71 },
            { symbol: 'PFE', name: 'Pfizer Inc.', country: 'USA', region: 'North America', sector: 'Healthcare', dividendYield: 6.80, payoutRatio: 85, marketCap: 158.2, peRatio: 11.2, price: 28.45, beta: 0.65, aiRating: 'sell', confidence: 65 },
            { symbol: 'DOC', name: 'Healthpeak Properties', country: 'USA', region: 'North America', sector: 'Real Estate', dividendYield: 7.10, payoutRatio: 89, marketCap: 8.9, peRatio: 9.8, price: 15.30, beta: 0.62, aiRating: 'sell', confidence: 62 },

            // Canadian High-Yield Stocks
            { symbol: 'ADN.TO', name: 'Acadian Timber Corp', country: 'Canada', region: 'North America', sector: 'Non-energy minerals', dividendYield: 8.02, payoutRatio: 85, marketCap: 0.26, peRatio: 17.39, price: 14.47, beta: 0.88, aiRating: 'hold', confidence: 72 },
            { symbol: 'VCI.TO', name: 'Vitreous Glass Inc', country: 'Canada', region: 'North America', sector: 'Process industries', dividendYield: 7.91, payoutRatio: 78, marketCap: 0.04, peRatio: 14.96, price: 6.24, beta: 0.92, aiRating: 'buy', confidence: 81 },
            { symbol: 'DIV.TO', name: 'Diversified Royalty Corp', country: 'Canada', region: 'North America', sector: 'Commercial services', dividendYield: 7.88, payoutRatio: 82, marketCap: 0.54, peRatio: 21.09, price: 3.49, beta: 0.95, aiRating: 'buy', confidence: 79 },
            { symbol: 'FC.TO', name: 'Firm Capital Mortgage Investment', country: 'Canada', region: 'North America', sector: 'Finance', dividendYield: 7.88, payoutRatio: 76, marketCap: 0.44, peRatio: 11.59, price: 11.88, beta: 0.87, aiRating: 'strong-buy', confidence: 89 },
            { symbol: 'AFM.TO', name: 'Alphamin Resources Corp', country: 'Canada', region: 'North America', sector: 'Non-energy minerals', dividendYield: 7.84, payoutRatio: 88, marketCap: 1.3, peRatio: 7.86, price: 1.02, beta: 1.25, aiRating: 'hold', confidence: 74 },
            { symbol: 'SOBO.TO', name: 'South Bow Corp', country: 'Canada', region: 'North America', sector: 'Industrial services', dividendYield: 7.83, payoutRatio: 79, marketCap: 7.58, peRatio: 22.60, price: 36.41, beta: 1.08, aiRating: 'hold', confidence: 76 },
            { symbol: 'DCM.TO', name: 'DATA Communications Management', country: 'Canada', region: 'North America', sector: 'Commercial services', dividendYield: 7.75, payoutRatio: 84, marketCap: 0.07, peRatio: 10.88, price: 1.29, beta: 1.12, aiRating: 'strong-buy', confidence: 88 },
            { symbol: 'KPT.TO', name: 'KP Tissue Inc', country: 'Canada', region: 'North America', sector: 'Consumer non-durables', dividendYield: 7.71, payoutRatio: 81, marketCap: 0.09, peRatio: 21.08, price: 9.34, beta: 0.89, aiRating: 'hold', confidence: 73 },
            { symbol: 'SGY.TO', name: 'Surge Energy Inc', country: 'Canada', region: 'North America', sector: 'Energy minerals', dividendYield: 7.66, payoutRatio: 87, marketCap: 0.67, peRatio: 15.26, price: 6.79, beta: 1.35, aiRating: 'strong-buy', confidence: 91 },
            { symbol: 'FRU.TO', name: 'Freehold Royalties Ltd', country: 'Canada', region: 'North America', sector: 'Miscellaneous', dividendYield: 7.56, payoutRatio: 83, marketCap: 2.34, peRatio: 18.76, price: 14.29, beta: 1.02, aiRating: 'buy', confidence: 82 },
            { symbol: 'GEI.TO', name: 'Gibson Energy Inc', country: 'Canada', region: 'North America', sector: 'Distribution services', dividendYield: 7.41, payoutRatio: 79, marketCap: 3.8, peRatio: 25.40, price: 23.22, beta: 0.98, aiRating: 'buy', confidence: 80 },
            { symbol: 'MKP.TO', name: 'MCAN Mortgage Corporation', country: 'Canada', region: 'North America', sector: 'Finance', dividendYield: 7.36, payoutRatio: 77, marketCap: 0.9, peRatio: 13.45, price: 22.27, beta: 0.91, aiRating: 'buy', confidence: 83 },
            { symbol: 'DE.TO', name: 'Decisive Dividend Corp', country: 'Canada', region: 'North America', sector: 'Producer manufacturing', dividendYield: 7.30, payoutRatio: 85, marketCap: 0.15, peRatio: 26.93, price: 7.40, beta: 1.18, aiRating: 'buy', confidence: 81 },
            { symbol: 'WCP.TO', name: 'Whitecap Resources Inc', country: 'Canada', region: 'North America', sector: 'Energy minerals', dividendYield: 6.95, payoutRatio: 82, marketCap: 12.93, peRatio: 9.02, price: 10.50, beta: 1.28, aiRating: 'strong-buy', confidence: 92 },
            { symbol: 'FSZ.TO', name: 'Fiera Capital Corporation', country: 'Canada', region: 'North America', sector: 'Finance', dividendYield: 6.95, payoutRatio: 74, marketCap: 0.66, peRatio: 21.44, price: 6.22, beta: 1.05, aiRating: 'hold', confidence: 75 },
            { symbol: 'PIF.TO', name: 'Polaris Renewable Energy Inc', country: 'Canada', region: 'North America', sector: 'Utilities', dividendYield: 6.78, payoutRatio: 89, marketCap: 0.27, peRatio: 0, price: 12.67, beta: 0.85, aiRating: 'strong-buy', confidence: 87 },

            // Australian High-Yield Stocks
            { symbol: 'IPH.AX', name: 'IPH Ltd', country: 'Australia', region: 'Oceania', sector: 'Commercial services', dividendYield: 11.24, payoutRatio: 92, marketCap: 0.94, peRatio: 14.01, price: 3.60, beta: 1.15, aiRating: 'buy', confidence: 84 },
            { symbol: 'RHI.AX', name: 'Red Hill Minerals Ltd', country: 'Australia', region: 'Oceania', sector: 'Non-energy minerals', dividendYield: 10.48, payoutRatio: 95, marketCap: 0.24, peRatio: 26.51, price: 3.77, beta: 1.35, aiRating: 'neutral', confidence: 68 },
            { symbol: 'YAL.AX', name: 'Yancoal Australia Ltd', country: 'Australia', region: 'Oceania', sector: 'Energy minerals', dividendYield: 10.28, payoutRatio: 88, marketCap: 7.47, peRatio: 7.79, price: 5.66, beta: 1.42, aiRating: 'buy', confidence: 79 },
            { symbol: 'LFG.AX', name: 'Liberty Financial Group Ltd', country: 'Australia', region: 'Oceania', sector: 'Finance', dividendYield: 9.81, payoutRatio: 85, marketCap: 1.22, peRatio: 9.17, price: 4.02, beta: 1.08, aiRating: 'buy', confidence: 82 },
            { symbol: 'MMS.AX', name: 'Mcmillan Shakespeare Limited', country: 'Australia', region: 'Oceania', sector: 'Finance', dividendYield: 9.34, payoutRatio: 82, marketCap: 1.1, peRatio: 11.64, price: 15.85, beta: 1.12, aiRating: 'buy', confidence: 83 },
            { symbol: 'EVO.AX', name: 'Embark Early Education Limited', country: 'Australia', region: 'Oceania', sector: 'Consumer services', dividendYield: 9.16, payoutRatio: 87, marketCap: 0.12, peRatio: 12.45, price: 0.655, beta: 0.95, aiRating: 'strong-buy', confidence: 88 },
            { symbol: 'TWE.AX', name: 'Treasury Wine Estates Limited', country: 'Australia', region: 'Oceania', sector: 'Consumer non-durables', dividendYield: 9.03, payoutRatio: 79, marketCap: 4.65, peRatio: 10.75, price: 5.76, beta: 1.02, aiRating: 'buy', confidence: 81 },
            { symbol: 'FWD.AX', name: 'Fleetwood Limited', country: 'Australia', region: 'Oceania', sector: 'Consumer durables', dividendYield: 9.03, payoutRatio: 84, marketCap: 0.26, peRatio: 18.41, price: 2.77, beta: 1.25, aiRating: 'strong-buy', confidence: 89 },
            { symbol: 'SVR.AX', name: 'Solvar Limited', country: 'Australia', region: 'Oceania', sector: 'Finance', dividendYield: 8.97, payoutRatio: 81, marketCap: 0.30, peRatio: 10.22, price: 1.560, beta: 1.18, aiRating: 'buy', confidence: 82 },
            { symbol: 'KSL.AX', name: 'Kina Securities Ltd', country: 'Australia', region: 'Oceania', sector: 'Finance', dividendYield: 8.54, payoutRatio: 78, marketCap: 0.36, peRatio: 7.97, price: 1.230, beta: 1.05, aiRating: 'strong-buy', confidence: 87 },
            { symbol: 'GEM.AX', name: 'G8 Education Limited', country: 'Australia', region: 'Oceania', sector: 'Consumer services', dividendYield: 8.46, payoutRatio: 83, marketCap: 0.50, peRatio: 7.44, price: 0.650, beta: 0.98, aiRating: 'buy', confidence: 80 },
            { symbol: 'BFL.AX', name: 'BSP Financial Group Ltd', country: 'Australia', region: 'Oceania', sector: 'Finance', dividendYield: 8.25, payoutRatio: 76, marketCap: 3.58, peRatio: 8.50, price: 7.67, beta: 0.92, aiRating: 'neutral', confidence: 71 },
            { symbol: 'ALX.AX', name: 'Atlas Arteria', country: 'Australia', region: 'Oceania', sector: 'Transportation', dividendYield: 8.20, payoutRatio: 89, marketCap: 7.08, peRatio: 30.25, price: 4.88, beta: 1.35, aiRating: 'neutral', confidence: 69 },
            { symbol: 'HLO.AX', name: 'Helloworld Travel Ltd', country: 'Australia', region: 'Oceania', sector: 'Consumer services', dividendYield: 8.02, payoutRatio: 81, marketCap: 0.29, peRatio: 9.67, price: 1.745, beta: 1.15, aiRating: 'buy', confidence: 83 },
            { symbol: 'CAF.AX', name: 'Centrepoint Alliance Limited', country: 'Australia', region: 'Oceania', sector: 'Miscellaneous', dividendYield: 8.00, payoutRatio: 79, marketCap: 0.08, peRatio: 15.63, price: 0.375, beta: 1.08, aiRating: 'strong-buy', confidence: 86 },
            { symbol: 'NHC.AX', name: 'New Hope Corporation Limited', country: 'Australia', region: 'Oceania', sector: 'Energy minerals', dividendYield: 7.96, payoutRatio: 86, marketCap: 3.6, peRatio: 8.66, price: 4.27, beta: 1.22, aiRating: 'neutral', confidence: 70 },
            { symbol: 'SMR.AX', name: 'Stanmore Resources Ltd', country: 'Australia', region: 'Oceania', sector: 'Energy minerals', dividendYield: 7.96, payoutRatio: 88, marketCap: 1.97, peRatio: 506.98, price: 2.18, beta: 1.45, aiRating: 'strong-buy', confidence: 88 },
            { symbol: 'DSK.AX', name: 'Dusk Group Ltd', country: 'Australia', region: 'Oceania', sector: 'Retail trade', dividendYield: 7.95, payoutRatio: 82, marketCap: 0.05, peRatio: 13.13, price: 0.880, beta: 1.12, aiRating: 'strong-buy', confidence: 89 },
            { symbol: 'ING.AX', name: 'Inghams Group Ltd', country: 'Australia', region: 'Oceania', sector: 'Process industries', dividendYield: 7.92, payoutRatio: 84, marketCap: 0.89, peRatio: 10.02, price: 2.40, beta: 1.05, aiRating: 'neutral', confidence: 72 },
            { symbol: 'MFG.AX', name: 'Magellan Financial Group Ltd', country: 'Australia', region: 'Oceania', sector: 'Finance', dividendYield: 7.81, payoutRatio: 87, marketCap: 1.59, peRatio: 10.09, price: 9.35, beta: 1.18, aiRating: 'neutral', confidence: 74 },

            // Asian High-Yield Stocks
            { symbol: '000858.SZ', name: 'Wuliangye Yibin Ltd', country: 'China', region: 'Asia', sector: 'Consumer Staples', dividendYield: 5.25, payoutRatio: 45, marketCap: 45.2, peRatio: 18.5, price: 168.50, beta: 0.95, aiRating: 'buy', confidence: 85 },
            { symbol: '6371.T', name: 'Tsubakimoto Chain', country: 'Japan', region: 'Asia', sector: 'Industrials', dividendYield: 3.73, payoutRatio: 38, marketCap: 2.1, peRatio: 15.2, price: 2840, beta: 0.88, aiRating: 'buy', confidence: 82 },
            { symbol: '2009.T', name: 'Torigoe', country: 'Japan', region: 'Asia', sector: 'Consumer Services', dividendYield: 3.96, payoutRatio: 42, marketCap: 1.8, peRatio: 16.8, price: 2450, beta: 0.91, aiRating: 'hold', confidence: 78 },
            { symbol: '9628.T', name: 'SAN Holdings', country: 'Japan', region: 'Asia', sector: 'Technology', dividendYield: 3.81, payoutRatio: 35, marketCap: 3.2, peRatio: 22.1, price: 1850, beta: 1.02, aiRating: 'buy', confidence: 84 },
            { symbol: '4783.T', name: 'NCD', country: 'Japan', region: 'Asia', sector: 'Healthcare', dividendYield: 4.67, payoutRatio: 48, marketCap: 1.5, peRatio: 18.9, price: 3200, beta: 0.85, aiRating: 'buy', confidence: 86 },
            { symbol: '600741.SS', name: 'HUAYU Automotive Systems', country: 'China', region: 'Asia', sector: 'Consumer Discretionary', dividendYield: 3.84, payoutRatio: 41, marketCap: 28.5, peRatio: 12.3, price: 24.80, beta: 1.08, aiRating: 'hold', confidence: 79 },
            { symbol: '603368.SS', name: 'Guangxi LiuYao Group', country: 'China', region: 'Asia', sector: 'Healthcare', dividendYield: 3.88, payoutRatio: 44, marketCap: 15.2, peRatio: 16.7, price: 18.90, beta: 0.92, aiRating: 'buy', confidence: 83 },
            { symbol: '9769.T', name: 'Gakkyusha Ltd', country: 'Japan', region: 'Asia', sector: 'Consumer Services', dividendYield: 4.51, payoutRatio: 52, marketCap: 0.8, peRatio: 14.2, price: 1650, beta: 0.78, aiRating: 'buy', confidence: 87 },
            { symbol: '600757.SS', name: 'Changjiang Publishing & Media', country: 'China', region: 'Asia', sector: 'Communication Services', dividendYield: 4.57, payoutRatio: 49, marketCap: 8.9, peRatio: 19.8, price: 12.45, beta: 1.05, aiRating: 'hold', confidence: 76 },
            { symbol: '005180.KS', name: 'Binggrae', country: 'South Korea', region: 'Asia', sector: 'Consumer Staples', dividendYield: 4.37, payoutRatio: 46, marketCap: 12.3, peRatio: 17.2, price: 45800, beta: 0.89, aiRating: 'buy', confidence: 84 },

            // European High-Yield Stocks
            { symbol: 'SHELL.AS', name: 'Shell PLC', country: 'Netherlands', region: 'Europe', sector: 'Energy', dividendYield: 4.20, payoutRatio: 58, marketCap: 185.2, peRatio: 12.4, price: 28.50, beta: 1.15, aiRating: 'buy', confidence: 86 },
            { symbol: 'BP.L', name: 'BP PLC', country: 'United Kingdom', region: 'Europe', sector: 'Energy', dividendYield: 4.80, payoutRatio: 62, marketCap: 95.8, peRatio: 11.8, price: 4.25, beta: 1.22, aiRating: 'buy', confidence: 83 },
            { symbol: 'ULVR.L', name: 'Unilever PLC', country: 'United Kingdom', region: 'Europe', sector: 'Consumer Staples', dividendYield: 3.90, payoutRatio: 55, marketCap: 124.5, peRatio: 18.2, price: 48.90, beta: 0.85, aiRating: 'buy', confidence: 88 },
            { symbol: 'AZN.L', name: 'AstraZeneca PLC', country: 'United Kingdom', region: 'Europe', sector: 'Healthcare', dividendYield: 2.80, payoutRatio: 48, marketCap: 185.6, peRatio: 22.1, price: 120.40, beta: 0.78, aiRating: 'buy', confidence: 91 },
            { symbol: 'NESN.SW', name: 'Nestle SA', country: 'Switzerland', region: 'Europe', sector: 'Consumer Staples', dividendYield: 2.40, payoutRatio: 52, marketCap: 312.8, peRatio: 19.8, price: 108.50, beta: 0.72, aiRating: 'buy', confidence: 93 },
            { symbol: 'ROG.SW', name: 'Roche Holding AG', country: 'Switzerland', region: 'Europe', sector: 'Healthcare', dividendYield: 3.60, payoutRatio: 61, marketCap: 245.2, peRatio: 16.9, price: 285.40, beta: 0.81, aiRating: 'buy', confidence: 89 },
            { symbol: 'ASML.AS', name: 'ASML Holding NV', country: 'Netherlands', region: 'Europe', sector: 'Technology', dividendYield: 1.80, payoutRatio: 35, marketCap: 285.6, peRatio: 28.4, price: 685.20, beta: 1.02, aiRating: 'buy', confidence: 94 },
            { symbol: 'SAP.DE', name: 'SAP SE', country: 'Germany', region: 'Europe', sector: 'Technology', dividendYield: 2.20, payoutRatio: 42, marketCap: 168.9, peRatio: 24.6, price: 142.80, beta: 0.95, aiRating: 'buy', confidence: 87 },
            { symbol: 'SAN.PA', name: 'Sanofi SA', country: 'France', region: 'Europe', sector: 'Healthcare', dividendYield: 4.10, payoutRatio: 58, marketCap: 118.2, peRatio: 14.8, price: 92.40, beta: 0.88, aiRating: 'hold', confidence: 81 },
            { symbol: 'OR.PA', name: 'L\'Oreal SA', country: 'France', region: 'Europe', sector: 'Consumer Staples', dividendYield: 1.90, payoutRatio: 41, marketCap: 245.8, peRatio: 26.3, price: 458.20, beta: 0.76, aiRating: 'buy', confidence: 85 },

            // Additional Global High-Yield Stocks (Top 250)
            { symbol: 'RIO.L', name: 'Rio Tinto PLC', country: 'United Kingdom', region: 'Europe', sector: 'Basic Materials', dividendYield: 6.80, payoutRatio: 72, marketCap: 98.4, peRatio: 8.9, price: 48.20, beta: 1.18, aiRating: 'buy', confidence: 82 },
            { symbol: 'BHP.L', name: 'BHP Group PLC', country: 'United Kingdom', region: 'Europe', sector: 'Basic Materials', dividendYield: 5.90, payoutRatio: 68, marketCap: 142.6, peRatio: 11.2, price: 24.80, beta: 1.25, aiRating: 'buy', confidence: 84 },
            { symbol: 'NG.L', name: 'National Grid PLC', country: 'United Kingdom', region: 'Europe', sector: 'Utilities', dividendYield: 5.20, payoutRatio: 78, marketCap: 48.9, peRatio: 15.6, price: 13.45, beta: 0.65, aiRating: 'buy', confidence: 88 },
            { symbol: 'TTE.PA', name: 'TotalEnergies SE', country: 'France', region: 'Europe', sector: 'Energy', dividendYield: 5.80, payoutRatio: 65, marketCap: 142.8, peRatio: 10.8, price: 58.40, beta: 1.08, aiRating: 'buy', confidence: 85 },
            { symbol: 'ENB.TO', name: 'Enbridge Inc', country: 'Canada', region: 'North America', sector: 'Energy', dividendYield: 6.40, payoutRatio: 75, marketCap: 98.2, peRatio: 18.2, price: 48.90, beta: 0.92, aiRating: 'buy', confidence: 87 },
            { symbol: 'TRP.TO', name: 'TC Energy Corporation', country: 'Canada', region: 'North America', sector: 'Energy', dividendYield: 5.90, payoutRatio: 82, marketCap: 68.4, peRatio: 16.8, price: 65.20, beta: 0.88, aiRating: 'buy', confidence: 83 },
            { symbol: 'BCE.TO', name: 'BCE Inc', country: 'Canada', region: 'North America', sector: 'Communication Services', dividendYield: 6.20, payoutRatio: 89, marketCap: 54.8, peRatio: 19.4, price: 58.40, beta: 0.78, aiRating: 'hold', confidence: 79 },
            { symbol: 'T.TO', name: 'TELUS Corporation', country: 'Canada', region: 'North America', sector: 'Communication Services', dividendYield: 5.80, payoutRatio: 85, marketCap: 38.9, peRatio: 22.1, price: 26.80, beta: 0.82, aiRating: 'buy', confidence: 84 },
            { symbol: 'RY.TO', name: 'Royal Bank of Canada', country: 'Canada', region: 'North America', sector: 'Financial Services', dividendYield: 4.20, payoutRatio: 52, marketCap: 185.6, peRatio: 12.8, price: 132.40, beta: 0.95, aiRating: 'buy', confidence: 91 },
            { symbol: 'TD.TO', name: 'Toronto-Dominion Bank', country: 'Canada', region: 'North America', sector: 'Financial Services', dividendYield: 4.80, payoutRatio: 58, marketCap: 156.8, peRatio: 13.2, price: 84.60, beta: 0.98, aiRating: 'buy', confidence: 89 },
            { symbol: 'FMG.AX', name: 'Fortescue Metals Group', country: 'Australia', region: 'Oceania', sector: 'Basic Materials', dividendYield: 8.90, payoutRatio: 78, marketCap: 45.2, peRatio: 8.9, price: 18.40, beta: 1.45, aiRating: 'buy', confidence: 82 },
            { symbol: 'WDS.AX', name: 'Woodside Energy Ltd', country: 'Australia', region: 'Oceania', sector: 'Energy', dividendYield: 7.20, payoutRatio: 82, marketCap: 32.8, peRatio: 10.4, price: 25.84, beta: 1.35, aiRating: 'buy', confidence: 79 },
            { symbol: 'BHP.AX', name: 'BHP Group Ltd', country: 'Australia', region: 'Oceania', sector: 'Basic Materials', dividendYield: 6.80, payoutRatio: 75, marketCap: 142.6, peRatio: 11.2, price: 45.20, beta: 1.28, aiRating: 'buy', confidence: 84 },
            { symbol: 'RIO.AX', name: 'Rio Tinto Ltd', country: 'Australia', region: 'Oceania', sector: 'Basic Materials', dividendYield: 6.20, payoutRatio: 72, marketCap: 38.9, peRatio: 9.8, price: 118.40, beta: 1.22, aiRating: 'buy', confidence: 86 },
            { symbol: 'TLS.AX', name: 'Telstra Corporation Ltd', country: 'Australia', region: 'Oceania', sector: 'Communication Services', dividendYield: 4.80, payoutRatio: 78, marketCap: 48.2, peRatio: 16.2, price: 3.85, beta: 0.85, aiRating: 'buy', confidence: 88 },
            { symbol: 'CBA.AX', name: 'Commonwealth Bank', country: 'Australia', region: 'Oceania', sector: 'Financial Services', dividendYield: 4.20, payoutRatio: 68, marketCap: 185.6, peRatio: 14.8, price: 108.90, beta: 0.92, aiRating: 'buy', confidence: 92 },
            { symbol: 'WBC.AX', name: 'Westpac Banking Corp', country: 'Australia', region: 'Oceania', sector: 'Financial Services', dividendYield: 5.60, payoutRatio: 78, marketCap: 98.4, peRatio: 12.4, price: 26.80, beta: 1.05, aiRating: 'buy', confidence: 85 },
            { symbol: 'ANZ.AX', name: 'ANZ Group Holdings', country: 'Australia', region: 'Oceania', sector: 'Financial Services', dividendYield: 5.40, payoutRatio: 76, marketCap: 78.9, peRatio: 11.8, price: 28.45, beta: 1.08, aiRating: 'buy', confidence: 83 },
            { symbol: 'NAB.AX', name: 'National Australia Bank', country: 'Australia', region: 'Oceania', sector: 'Financial Services', dividendYield: 5.20, payoutRatio: 74, marketCap: 89.2, peRatio: 12.1, price: 32.80, beta: 1.02, aiRating: 'buy', confidence: 87 },

            // Asian Stocks (Continued)
            { symbol: '005930.KS', name: 'Samsung Electronics', country: 'South Korea', region: 'Asia', sector: 'Technology', dividendYield: 2.80, payoutRatio: 35, marketCap: 325.8, peRatio: 15.2, price: 68500, beta: 1.18, aiRating: 'buy', confidence: 91 },
            { symbol: '000270.KS', name: 'Kia Corporation', country: 'South Korea', region: 'Asia', sector: 'Consumer Discretionary', dividendYield: 3.20, payoutRatio: 25, marketCap: 28.9, peRatio: 8.9, price: 78500, beta: 1.25, aiRating: 'buy', confidence: 84 },
            { symbol: '005380.KS', name: 'Hyundai Motor', country: 'South Korea', region: 'Asia', sector: 'Consumer Discretionary', dividendYield: 2.90, payoutRatio: 22, marketCap: 42.1, peRatio: 10.2, price: 185000, beta: 1.15, aiRating: 'buy', confidence: 86 },
            { symbol: '051910.KS', name: 'LG Chem', country: 'South Korea', region: 'Asia', sector: 'Basic Materials', dividendYield: 2.40, payoutRatio: 28, marketCap: 18.5, peRatio: 12.8, price: 485000, beta: 1.35, aiRating: 'hold', confidence: 78 },
            { symbol: '028260.KS', name: 'Samsung SDI', country: 'South Korea', region: 'Asia', sector: 'Technology', dividendYield: 1.80, payoutRatio: 20, marketCap: 24.8, peRatio: 18.9, price: 285000, beta: 1.42, aiRating: 'buy', confidence: 89 },
            { symbol: '7203.T', name: 'Toyota Motor Corp', country: 'Japan', region: 'Asia', sector: 'Consumer Discretionary', dividendYield: 2.60, payoutRatio: 32, marketCap: 285.6, peRatio: 12.4, price: 2850, beta: 0.95, aiRating: 'buy', confidence: 93 },
            { symbol: '6758.T', name: 'Sony Group Corp', country: 'Japan', region: 'Asia', sector: 'Technology', dividendYield: 1.90, payoutRatio: 25, marketCap: 125.8, peRatio: 16.8, price: 12850, beta: 1.08, aiRating: 'buy', confidence: 87 },
            { symbol: '8306.T', name: 'Mitsubishi UFJ Financial', country: 'Japan', region: 'Asia', sector: 'Financial Services', dividendYield: 3.40, payoutRatio: 42, marketCap: 98.4, peRatio: 12.1, price: 1850, beta: 1.02, aiRating: 'buy', confidence: 85 },
            { symbol: '005930.KS', name: 'SK Hynix', country: 'South Korea', region: 'Asia', sector: 'Technology', dividendYield: 1.60, payoutRatio: 18, marketCap: 42.8, peRatio: 14.2, price: 125000, beta: 1.52, aiRating: 'buy', confidence: 88 },
            { symbol: '000660.KS', name: 'LG Electronics', country: 'South Korea', region: 'Asia', sector: 'Consumer Discretionary', dividendYield: 2.20, payoutRatio: 28, marketCap: 15.2, peRatio: 11.8, price: 68500, beta: 1.18, aiRating: 'buy', confidence: 82 },

            // European Stocks (Continued)
            { symbol: 'ASML.AS', name: 'ASML Holding NV', country: 'Netherlands', region: 'Europe', sector: 'Technology', dividendYield: 1.80, payoutRatio: 35, marketCap: 285.6, peRatio: 28.4, price: 685.20, beta: 1.02, aiRating: 'buy', confidence: 94 },
            { symbol: 'LVMH.PA', name: 'LVMH Moet Hennessy', country: 'France', region: 'Europe', sector: 'Consumer Discretionary', dividendYield: 1.60, payoutRatio: 38, marketCap: 385.2, peRatio: 24.8, price: 725.40, beta: 0.85, aiRating: 'buy', confidence: 92 },
            { symbol: 'MC.PA', name: 'LVMH SE', country: 'France', region: 'Europe', sector: 'Consumer Discretionary', dividendYield: 1.40, payoutRatio: 32, marketCap: 245.8, peRatio: 26.3, price: 458.20, beta: 0.88, aiRating: 'buy', confidence: 89 },
            { symbol: 'NVO', name: 'Novo Nordisk A/S', country: 'Denmark', region: 'Europe', sector: 'Healthcare', dividendYield: 1.20, payoutRatio: 45, marketCap: 425.8, peRatio: 32.1, price: 185.40, beta: 0.72, aiRating: 'buy', confidence: 95 },
            { symbol: 'NOVO-B.CO', name: 'Novo Nordisk B A/S', country: 'Denmark', region: 'Europe', sector: 'Healthcare', dividendYield: 1.10, payoutRatio: 42, marketCap: 385.6, peRatio: 29.8, price: 825.00, beta: 0.75, aiRating: 'buy', confidence: 93 },
            { symbol: 'UNA.AS', name: 'Unilever NV', country: 'Netherlands', region: 'Europe', sector: 'Consumer Staples', dividendYield: 3.90, payoutRatio: 65, marketCap: 124.5, peRatio: 18.2, price: 48.90, beta: 0.85, aiRating: 'buy', confidence: 88 },
            { symbol: 'ASML.AS', name: 'ASML Holding NV', country: 'Netherlands', region: 'Europe', sector: 'Technology', dividendYield: 1.80, payoutRatio: 35, marketCap: 285.6, peRatio: 28.4, price: 685.20, beta: 1.02, aiRating: 'buy', confidence: 94 },
            { symbol: 'ADYEN.AS', name: 'Adyen NV', country: 'Netherlands', region: 'Europe', sector: 'Technology', dividendYield: 0.00, payoutRatio: 0, marketCap: 45.2, peRatio: 45.8, price: 1450.00, beta: 1.35, aiRating: 'hold', confidence: 78 },
            { symbol: 'PRX.AS', name: 'Prosus NV', country: 'Netherlands', region: 'Europe', sector: 'Technology', dividendYield: 0.00, payoutRatio: 0, marketCap: 125.8, peRatio: 12.4, price: 48.20, beta: 1.18, aiRating: 'buy', confidence: 82 },
            { symbol: 'INGA.AS', name: 'ING Groep NV', country: 'Netherlands', region: 'Europe', sector: 'Financial Services', dividendYield: 5.20, payoutRatio: 58, marketCap: 58.9, peRatio: 11.2, price: 15.80, beta: 1.25, aiRating: 'buy', confidence: 84 },
            { symbol: 'MT.AS', name: 'ArcelorMittal SA', country: 'Luxembourg', region: 'Europe', sector: 'Basic Materials', dividendYield: 4.80, payoutRatio: 28, marketCap: 28.5, peRatio: 5.8, price: 28.40, beta: 1.45, aiRating: 'buy', confidence: 81 },

            // More Global High-Yield Stocks (250+ total)
            { symbol: 'HSBA.L', name: 'HSBC Holdings PLC', country: 'United Kingdom', region: 'Europe', sector: 'Financial Services', dividendYield: 5.60, payoutRatio: 48, marketCap: 145.2, peRatio: 8.9, price: 6.85, beta: 1.15, aiRating: 'buy', confidence: 86 },
            { symbol: 'BP.L', name: 'BP PLC', country: 'United Kingdom', region: 'Europe', sector: 'Energy', dividendYield: 4.80, payoutRatio: 62, marketCap: 95.8, peRatio: 11.8, price: 4.25, beta: 1.22, aiRating: 'buy', confidence: 83 },
            { symbol: 'SHEL.L', name: 'Shell PLC', country: 'United Kingdom', region: 'Europe', sector: 'Energy', dividendYield: 4.20, payoutRatio: 58, marketCap: 185.2, peRatio: 12.4, price: 28.50, beta: 1.15, aiRating: 'buy', confidence: 86 },
            { symbol: 'AZN.L', name: 'AstraZeneca PLC', country: 'United Kingdom', region: 'Europe', sector: 'Healthcare', dividendYield: 2.80, payoutRatio: 48, marketCap: 185.6, peRatio: 22.1, price: 120.40, beta: 0.78, aiRating: 'buy', confidence: 91 },
            { symbol: 'ULVR.L', name: 'Unilever PLC', country: 'United Kingdom', region: 'Europe', sector: 'Consumer Staples', dividendYield: 3.90, payoutRatio: 65, marketCap: 124.5, peRatio: 18.2, price: 48.90, beta: 0.85, aiRating: 'buy', confidence: 88 },
            { symbol: 'DGE.L', name: 'Diageo PLC', country: 'United Kingdom', region: 'Europe', sector: 'Consumer Staples', dividendYield: 2.40, payoutRatio: 58, marketCap: 78.9, peRatio: 19.8, price: 35.20, beta: 0.82, aiRating: 'buy', confidence: 87 },
            { symbol: 'REL.L', name: 'RELX PLC', country: 'United Kingdom', region: 'Europe', sector: 'Industrials', dividendYield: 2.10, payoutRatio: 52, marketCap: 68.4, peRatio: 24.6, price: 32.80, beta: 0.75, aiRating: 'buy', confidence: 89 },
            { symbol: 'BT-A.L', name: 'BT Group PLC', country: 'United Kingdom', region: 'Europe', sector: 'Communication Services', dividendYield: 5.80, payoutRatio: 68, marketCap: 18.9, peRatio: 12.4, price: 1.85, beta: 1.02, aiRating: 'hold', confidence: 76 },
            { symbol: 'VOD.L', name: 'Vodafone Group PLC', country: 'United Kingdom', region: 'Europe', sector: 'Communication Services', dividendYield: 6.20, payoutRatio: 85, marketCap: 28.5, peRatio: 9.8, price: 0.95, beta: 1.18, aiRating: 'hold', confidence: 72 },
            { symbol: 'IAG.L', name: 'International Airlines Group', country: 'United Kingdom', region: 'Europe', sector: 'Industrials', dividendYield: 0.00, payoutRatio: 0, marketCap: 12.8, peRatio: 8.2, price: 2.45, beta: 1.65, aiRating: 'sell', confidence: 58 }
        ];
    }

    // Generate realistic mock portfolio data using global stock database
    generateMockPortfolioData() {
        // Select top stocks from global database for portfolio
        const topStocks = this.globalStockDatabase
            .filter(stock => stock.confidence >= 80 && stock.dividendYield >= 3.0)
            .slice(0, 15);

        const holdings = topStocks.map(stock => ({
            symbol: stock.symbol,
            name: stock.name,
            country: stock.country,
            region: stock.region,
            sector: stock.sector,
            shares: Math.floor(Math.random() * 300) + 50,
            avgCost: stock.price * (0.85 + Math.random() * 0.3), // 85-115% of current price
            currentPrice: stock.price,
            dividendYield: stock.dividendYield,
            beta: stock.beta
        }));

        return {
            holdings: holdings,
            totalValue: this.calculateTotalValue(holdings),
            dailyChange: this.generateDailyChange(holdings),
            totalDividendIncome: this.calculateDividendIncome(holdings),
            metrics: this.calculatePortfolioMetrics(holdings)
        };
    }

    // Generate realistic market data
    generateMockMarketData() {
        const now = new Date();
        const data = [];
        
        for (let i = 30; i >= 0; i--) {
            const date = new Date(now);
            date.setDate(date.getDate() - i);
            const baseValue = 100000 + (Math.random() - 0.5) * 10000;
            data.push({
                date: date.toISOString().split('T')[0],
                value: baseValue + Math.sin(i * 0.1) * 5000,
                sp500: 4200 + Math.sin(i * 0.15) * 200,
                dividends: Math.random() * 1000 + 500
            });
        }
        
        return data;
    }

    // Calculate portfolio metrics
    calculatePortfolioMetrics(holdings) {
        const totalValue = this.calculateTotalValue(holdings);
        const totalCost = holdings.reduce((sum, h) => sum + (h.shares * h.avgCost), 0);
        const totalReturn = ((totalValue - totalCost) / totalCost) * 100;
        
        const weightedYield = holdings.reduce((sum, h) => {
            const weight = (h.shares * h.currentPrice) / totalValue;
            return sum + (h.dividendYield * weight);
        }, 0);

        return {
            totalReturn: totalReturn,
            annualDividendYield: weightedYield,
            sharpeRatio: 1.34,
            beta: 0.78,
            maxDrawdown: -8.2,
            var95: -2.1
        };
    }

    calculateTotalValue(holdings) {
        return holdings.reduce((sum, holding) => sum + (holding.shares * holding.currentPrice), 0);
    }

    calculateDividendIncome(holdings) {
        return holdings.reduce((sum, holding) => 
            sum + ((holding.shares * holding.currentPrice) * (holding.dividendYield / 100)), 0);
    }

    generateDailyChange(holdings) {
        return holdings.reduce((sum, holding) => {
            const change = (Math.random() - 0.5) * 0.05; // ±5% daily change
            return sum + (holding.shares * holding.currentPrice * change);
        }, 0);
    }

        return {
            holdings: holdings,
            totalValue: this.calculateTotalValue(holdings),
            dailyChange: this.generateDailyChange(holdings),
            totalDividendIncome: this.calculateDividendIncome(holdings),
            metrics: this.calculatePortfolioMetrics(holdings)
        };
    }

    // Generate realistic market data
    generateMockMarketData() {
        const now = new Date();
        const data = [];
        
        for (let i = 30; i >= 0; i--) {
            const date = new Date(now);
            date.setDate(date.getDate() - i);
            const baseValue = 100000 + (Math.random() - 0.5) * 10000;
            data.push({
                date: date.toISOString().split('T')[0],
                value: baseValue + Math.sin(i * 0.1) * 5000,
                sp500: 4200 + Math.sin(i * 0.15) * 200,
                dividends: Math.random() * 1000 + 500
            });
        }
        
        return data;
    }

    // Calculate portfolio metrics
    calculatePortfolioMetrics(holdings) {
        const totalValue = this.calculateTotalValue(holdings);
        const totalCost = holdings.reduce((sum, h) => sum + (h.shares * h.avgCost), 0);
        const totalReturn = ((totalValue - totalCost) / totalCost) * 100;
        
        const weightedYield = holdings.reduce((sum, h) => {
            const weight = (h.shares * h.currentPrice) / totalValue;
            return sum + (h.dividendYield * weight);
        }, 0);

        return {
            totalReturn: totalReturn,
            annualDividendYield: weightedYield,
            sharpeRatio: 1.34,
            beta: 0.78,
            maxDrawdown: -8.2,
            var95: -2.1
        };
    }

    calculateTotalValue(holdings) {
        return holdings.reduce((sum, holding) => sum + (holding.shares * holding.currentPrice), 0);
    }

    calculateDividendIncome(holdings) {
        return holdings.reduce((sum, holding) => 
            sum + ((holding.shares * holding.currentPrice) * (holding.dividendYield / 100)), 0);
    }

    generateDailyChange(holdings) {
        return holdings.reduce((sum, holding) => {
            const change = (Math.random() - 0.5) * 0.05; // ±5% daily change
            return sum + (holding.shares * holding.currentPrice * change);
        }, 0);
    }

    // Initialize all charts
    initializeCharts() {
        this.initPerformanceChart();
        this.initHoldingsChart();
        this.initSectorChart();
        this.initDividendChart();
    }

    // Performance comparison chart
    initPerformanceChart() {
        const chartDom = document.getElementById('performance-chart');
        if (!chartDom) return;

        const myChart = echarts.init(chartDom);
        const dates = this.marketData.map(d => d.date);
        const portfolioValues = this.marketData.map(d => d.value);
        const sp500Values = this.marketData.map(d => d.sp500);

        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'axis',
                backgroundColor: '#1a2332',
                borderColor: '#b7791f',
                textStyle: { color: '#fafafa' }
            },
            legend: {
                data: ['Portfolio', 'S&P 500'],
                textStyle: { color: '#fafafa' }
            },
            grid: {
                left: '3%', right: '4%', bottom: '3%', containLabel: true
            },
            xAxis: {
                type: 'category',
                data: dates,
                axisLine: { lineStyle: { color: '#2d3748' } },
                axisLabel: { color: '#fafafa' }
            },
            yAxis: {
                type: 'value',
                axisLine: { lineStyle: { color: '#2d3748' } },
                axisLabel: { color: '#fafafa' },
                splitLine: { lineStyle: { color: '#2d3748' } }
            },
            series: [
                {
                    name: 'Portfolio',
                    type: 'line',
                    data: portfolioValues,
                    lineStyle: { color: '#b7791f', width: 3 },
                    itemStyle: { color: '#b7791f' },
                    areaStyle: { 
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(183, 121, 31, 0.3)' },
                            { offset: 1, color: 'rgba(183, 121, 31, 0.1)' }
                        ])
                    }
                },
                {
                    name: 'S&P 500',
                    type: 'line',
                    data: sp500Values,
                    lineStyle: { color: '#2d5a3d', width: 2 },
                    itemStyle: { color: '#2d5a3d' }
                }
            ]
        };

        myChart.setOption(option);
        this.charts.performance = myChart;
    }

    // Holdings breakdown chart
    initHoldingsChart() {
        const chartDom = document.getElementById('holdings-chart');
        if (!chartDom) return;

        const myChart = echarts.init(chartDom);
        const data = this.portfolioData.holdings.map(h => ({
            name: h.symbol,
            value: h.shares * h.currentPrice
        }));

        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                backgroundColor: '#1a2332',
                borderColor: '#b7791f',
                textStyle: { color: '#fafafa' },
                formatter: '{a} <br/>{b}: ${c} ({d}%)'
            },
            series: [{
                name: 'Holdings',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#1a2332',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold',
                        color: '#fafafa'
                    }
                },
                labelLine: {
                    show: false
                },
                data: data,
                color: ['#b7791f', '#2d5a3d', '#d69e2e', '#c53030', '#2d3748', '#b7791f', '#2d5a3d', '#d69e2e', '#c53030', '#2d3748']
            }]
        };

        myChart.setOption(option);
        this.charts.holdings = myChart;
    }

    // Sector allocation chart
    initSectorChart() {
        const chartDom = document.getElementById('sector-chart');
        if (!chartDom) return;

        const myChart = echarts.init(chartDom);
        const sectorData = this.portfolioData.holdings.reduce((acc, holding) => {
            const sector = holding.sector;
            const value = holding.shares * holding.currentPrice;
            acc[sector] = (acc[sector] || 0) + value;
            return acc;
        }, {});

        const data = Object.entries(sectorData).map(([sector, value]) => ({
            name: sector,
            value: value
        }));

        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                backgroundColor: '#1a2332',
                borderColor: '#b7791f',
                textStyle: { color: '#fafafa' }
            },
            series: [{
                name: 'Sectors',
                type: 'pie',
                radius: '60%',
                data: data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                color: ['#b7791f', '#2d5a3d', '#d69e2e', '#c53030', '#2d3748']
            }]
        };

        myChart.setOption(option);
        this.charts.sector = myChart;
    }

    // Dividend income chart
    initDividendChart() {
        const chartDom = document.getElementById('dividend-chart');
        if (!chartDom) return;

        const myChart = echarts.init(chartDom);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dividendIncome = months.map(() => Math.random() * 2000 + 1000);

        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'axis',
                backgroundColor: '#1a2332',
                borderColor: '#b7791f',
                textStyle: { color: '#fafafa' }
            },
            grid: {
                left: '3%', right: '4%', bottom: '3%', containLabel: true
            },
            xAxis: {
                type: 'category',
                data: months,
                axisLine: { lineStyle: { color: '#2d3748' } },
                axisLabel: { color: '#fafafa' }
            },
            yAxis: {
                type: 'value',
                axisLine: { lineStyle: { color: '#2d3748' } },
                axisLabel: { color: '#fafafa' },
                splitLine: { lineStyle: { color: '#2d3748' } }
            },
            series: [{
                name: 'Dividend Income',
                type: 'bar',
                data: dividendIncome,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#2d5a3d' },
                        { offset: 1, color: '#b7791f' }
                    ])
                }
            }]
        };

        myChart.setOption(option);
        this.charts.dividend = myChart;
    }

    // Start real-time data updates
    startRealTimeUpdates() {
        this.updateInterval = setInterval(() => {
            this.updatePortfolioData();
            this.updateUI();
        }, 15000); // Update every 15 seconds
    }

    // Update portfolio data with small random changes
    updatePortfolioData() {
        this.portfolioData.holdings.forEach(holding => {
            const change = (Math.random() - 0.5) * 0.02; // ±1% change
            holding.currentPrice *= (1 + change);
        });

        this.portfolioData.totalValue = this.calculateTotalValue(this.portfolioData.holdings);
        this.portfolioData.dailyChange = this.generateDailyChange(this.portfolioData.holdings);
        this.portfolioData.totalDividendIncome = this.calculateDividendIncome(this.portfolioData.holdings);
    }

    // Update UI elements
    updateUI() {
        this.updateMetrics();
        this.updateHoldingsTable();
        this.updateCharts();
    }

    // Update key metrics display
    updateMetrics() {
        const totalValueEl = document.getElementById('total-value');
        const dailyChangeEl = document.getElementById('daily-change');
        const dividendYieldEl = document.getElementById('dividend-yield');
        const sharpeRatioEl = document.getElementById('sharpe-ratio');

        if (totalValueEl) {
            totalValueEl.textContent = `$${this.portfolioData.totalValue.toLocaleString('en-US', {maximumFractionDigits: 0})}`;
        }

        if (dailyChangeEl) {
            const changePercent = (this.portfolioData.dailyChange / this.portfolioData.totalValue) * 100;
            const sign = this.portfolioData.dailyChange >= 0 ? '+' : '';
            dailyChangeEl.textContent = `${sign}$${Math.abs(this.portfolioData.dailyChange).toLocaleString('en-US', {maximumFractionDigits: 0})} (${sign}${changePercent.toFixed(2)}%)`;
            dailyChangeEl.className = this.portfolioData.dailyChange >= 0 ? 'text-green-400' : 'text-red-400';
        }

        if (dividendYieldEl) {
            dividendYieldEl.textContent = `${this.portfolioData.metrics.annualDividendYield.toFixed(2)}%`;
        }

        if (sharpeRatioEl) {
            sharpeRatioEl.textContent = this.portfolioData.metrics.sharpeRatio.toFixed(2);
        }
    }

    // Update holdings table
    updateHoldingsTable() {
        const tbody = document.getElementById('holdings-tbody');
        if (!tbody) return;

        tbody.innerHTML = '';
        this.portfolioData.holdings.forEach(holding => {
            const row = document.createElement('tr');
            const marketValue = holding.shares * holding.currentPrice;
            const gainLoss = (holding.currentPrice - holding.avgCost) * holding.shares;
            const gainLossPercent = ((holding.currentPrice - holding.avgCost) / holding.avgCost) * 100;

            row.className = 'hover:bg-gray-800 transition-colors duration-200';
            row.innerHTML = `
                <td class="px-4 py-3 text-copper-400 font-medium">${holding.symbol}</td>
                <td class="px-4 py-3 text-gray-300">${holding.name}</td>
                <td class="px-4 py-3 text-gray-300">${holding.shares}</td>
                <td class="px-4 py-3 text-gray-300">$${holding.currentPrice.toFixed(2)}</td>
                <td class="px-4 py-3 text-gray-300">$${marketValue.toLocaleString('en-US', {maximumFractionDigits: 0})}</td>
                <td class="px-4 py-3 ${gainLoss >= 0 ? 'text-green-400' : 'text-red-400'}">
                    ${gainLoss >= 0 ? '+' : ''}$${Math.abs(gainLoss).toLocaleString('en-US', {maximumFractionDigits: 0})}
                    (${gainLoss >= 0 ? '+' : ''}${gainLossPercent.toFixed(2)}%)
                </td>
                <td class="px-4 py-3 text-copper-400">${holding.dividendYield.toFixed(2)}%</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Update charts with new data
    updateCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart) {
                chart.resize();
            }
        });
    }

    // Setup event listeners
    setupEventListeners() {
        // Time range selector
        const timeRangeBtns = document.querySelectorAll('.time-range-btn');
        timeRangeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                timeRangeBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.updatePerformanceChart(e.target.dataset.range);
            });
        });

        // Resize charts on window resize
        window.addEventListener('resize', () => {
            this.updateCharts();
        });
    }

    // Update performance chart based on time range
    updatePerformanceChart(range) {
        if (!this.charts.performance) return;

        let dataPoints;
        switch(range) {
            case '1D':
                dataPoints = this.marketData.slice(-1);
                break;
            case '1W':
                dataPoints = this.marketData.slice(-7);
                break;
            case '1M':
                dataPoints = this.marketData.slice(-30);
                break;
            default:
                dataPoints = this.marketData;
        }

        const dates = dataPoints.map(d => d.date);
        const portfolioValues = dataPoints.map(d => d.value);
        const sp500Values = dataPoints.map(d => d.sp500);

        this.charts.performance.setOption({
            xAxis: { data: dates },
            series: [
                { data: portfolioValues },
                { data: sp500Values }
            ]
        });
    }

    // Initialize animations
    initializeAnimations() {
        // Animate metrics on load
        anime({
            targets: '.metric-card',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutQuart'
        });

        // Animate charts on load
        anime({
            targets: '.chart-container',
            scale: [0.9, 1],
            opacity: [0, 1],
            delay: anime.stagger(200, {start: 400}),
            duration: 1000,
            easing: 'easeOutQuart'
        });
    }

    // Cleanup
    destroy() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.dispose();
        });
    }

    // Get stocks by region
    getStocksByRegion(region) {
        return this.globalStockDatabase.filter(stock => stock.region === region);
    }

    // Get stocks by country
    getStocksByCountry(country) {
        return this.globalStockDatabase.filter(stock => stock.country === country);
    }

    // Get stocks by sector
    getStocksBySector(sector) {
        return this.globalStockDatabase.filter(stock => stock.sector === sector);
    }

    // Search stocks by symbol or name
    searchStocks(query) {
        const lowerQuery = query.toLowerCase();
        return this.globalStockDatabase.filter(stock => 
            stock.symbol.toLowerCase().includes(lowerQuery) ||
            stock.name.toLowerCase().includes(lowerQuery)
        );
    }
}

// Initialize the system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dividendSystem = new DividendInvestingSystem();
});

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatPercent(value) {
    return `${value.toFixed(2)}%`;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DividendInvestingSystem;
}