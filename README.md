# ChartEye TradingView Plugin

Unlock the power of AI-driven technical analysis directly within TradingView's Advanced Charts with the ChartEye TradingView Plugin.

## Integration

These instructions will help you integrate the ChartEye TradingView Plugin into TradingView's Advanced Charts.

### Prerequisites

- A project with TradingView's Advanced Charts library integrated.
- A ChartEye API key. You can get one by signing up at [ChartEye](https://tradingview.charteye.ai).
- Whitelisted hostname(s). You can whitelist your domain by signing up at [ChartEye](https://tradingview.charteye.ai).

### Installation

1. Add the ChartEye TradingView Plugin script to your project.

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/Danalytica/charteye-tradingview-plugin-dist/charteye.js"></script>
```

2. Initialize the plugin

```javascript
const widget = new TradingView.widget({
  // Your Advanced Charts configuration
});

const charteyePlugin = new ChartEye(widget, {
  apiKey: 'xxx'
});

charteyePlugin.init();
```

