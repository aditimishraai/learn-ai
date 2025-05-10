# Installation Guide

This guide will help you set up the Learn AI project on your local machine.

## System Requirements

- Node.js v14 or higher
- Python 3.7 or higher (optional, for Python server)
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Ollama installed with Qwen3 model

## Step-by-Step Installation

### 1. Install Ollama

#### macOS
```bash
curl https://ollama.ai/install.sh | sh
```

#### Linux
```bash
curl https://ollama.ai/install.sh | sh
```

#### Windows
Download the installer from [Ollama's website](https://ollama.ai)

### 2. Pull the Qwen3 Model

```bash
ollama pull qwen3:1.7b
```

### 3. Clone the Repository

```bash
git clone https://github.com/yourusername/learn-ai.git
cd learn-ai
```

### 4. Start Ollama

```bash
ollama run qwen3:1.7b
```

### 5. Start the Web Server

Choose one of the following methods:

#### Using Python
```bash
python -m http.server 8000
```

#### Using Node.js
```bash
npx http-server
```

### 6. Access the Application

Open your web browser and navigate to:
```
http://localhost:8000
```

## Troubleshooting

### Common Issues

1. **Ollama Connection Error**
   - Ensure Ollama is running
   - Check if the model is properly loaded
   - Verify the API endpoint is accessible

2. **Server Connection Issues**
   - Check if the port 8000 is available
   - Try a different port if needed
   - Ensure no firewall is blocking the connection

3. **Model Loading Issues**
   - Verify sufficient disk space
   - Check internet connection
   - Try pulling the model again

### Getting Help

If you encounter any issues:
1. Check the [GitHub Issues](https://github.com/yourusername/learn-ai/issues)
2. Open a new issue with detailed information
3. Contact the maintainers

## Next Steps

After installation:
1. Explore the main page
2. Try the interactive chat
3. Check out the architecture diagrams
4. Read the tutorials

## Development Setup

For developers who want to contribute:

1. Install development dependencies:
```bash
npm install
```

2. Set up your development environment:
```bash
npm run dev
```

3. Make your changes and test locally

4. Submit a pull request

## Security Considerations

- Keep Ollama updated
- Use HTTPS in production
- Monitor API usage
- Follow security best practices

## Production Deployment

For production deployment:

1. Set up a proper web server (Nginx, Apache)
2. Configure SSL/TLS
3. Set up proper CORS policies
4. Implement rate limiting
5. Monitor system resources

## Support

For additional help:
- Check the [documentation](docs/)
- Join our [Discord community](https://discord.gg/your-server)
- Follow our [Twitter](https://twitter.com/your-handle) 