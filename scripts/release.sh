#!/bin/bash

# Secure release script for Metalsmith plugins
# Usage: ./scripts/release.sh [patch|minor|major] [--ci]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if release type is provided
if [ -z "$1" ]; then
    print_error "Release type is required. Usage: $0 [patch|minor|major] [--ci]"
    echo "Examples:"
    echo "  $0 patch"
    echo "  $0 minor --ci"
    echo "  $0 major --ci"
    exit 1
fi

RELEASE_TYPE="$1"
CI_FLAG="$2"

# Validate release type
if [[ "$RELEASE_TYPE" != "patch" && "$RELEASE_TYPE" != "minor" && "$RELEASE_TYPE" != "major" ]]; then
    print_error "Invalid release type: $RELEASE_TYPE. Must be 'patch', 'minor', or 'major'"
    exit 1
fi

# Check if GitHub CLI is available
if ! command -v gh &> /dev/null; then
    print_error "GitHub CLI (gh) is not installed. Please install it first:"
    echo "  brew install gh  # macOS"
    echo "  sudo apt install gh  # Ubuntu/Debian"
    exit 1
fi

# Check if user is authenticated with GitHub CLI
if ! gh auth status &> /dev/null; then
    print_error "Not authenticated with GitHub CLI. Please run:"
    echo "  gh auth login"
    exit 1
fi

print_status "GitHub CLI authentication verified"

# Export GitHub token securely
export GH_TOKEN=$(gh auth token)

if [ -z "$GH_TOKEN" ]; then
    print_error "Failed to get GitHub token from gh auth"
    exit 1
fi

print_status "GitHub token obtained securely"

# Prepare release-it command
RELEASE_CMD="release-it $RELEASE_TYPE"

if [ "$CI_FLAG" = "--ci" ]; then
    RELEASE_CMD="$RELEASE_CMD --ci"
    print_status "Running in CI mode (non-interactive)"
fi

print_status "Starting $RELEASE_TYPE release..."

# Run release-it with the token
eval $RELEASE_CMD

if [ $? -eq 0 ]; then
    print_status "Release completed successfully! 🎉"
else
    print_error "Release failed"
    exit 1
fi