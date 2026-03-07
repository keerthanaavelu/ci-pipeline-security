# ci-pipeline-security with SAST and Secret Scanning
This project showcases a secure Continuous Integration (CI) pipeline developed using GitHub Actions.
The pipeline evaluates code quality, identifies security vulnerabilities, and detects exposed secrets prior to permitting code merges.

## Tech Stack
- Node.js REST API
- GitHub Actions (CI)
- Jest (Unit Testing)
- Semgrep (SAST Security Scan)
- Gitleaks (Secret Detection)

## CI Pipeline Stages

### 1. Checkout
Retrieves the most recent code from the repository into the CI runner, enabling the execution of tests and security scans.

### 2. Install Dependencies
Executes `npm install` to acquire all necessary project packages listed in `package.json`.

### 3. Unit Tests
Conducts automated testing with Jest (`npm test`) to confirm the application's functionality.

### 4. SAST Scan
Employs Semgrep to analyze the source code for security vulnerabilities in accordance with OWASP Top 10 guidelines.

Why: Identifies insecure coding practices at an early stage of development.

### 5. Secret Scanning
Utilizes Gitleaks to uncover exposed credentials, including API keys, tokens, or passwords within the repository.

Why: Safeguards against the accidental commitment of sensitive information to source control.

## Security Enforcement
The pipeline is set to fail under the following conditions:
- Detection of a high-severity vulnerability
- Discovery of a secret or credential within the code

## Branch Protection
Branch protection policies mandate that the CI pipeline must successfully pass before any code can be merged into the main branch.

This guarantees that only thoroughly tested and secure code is incorporated into the project.
