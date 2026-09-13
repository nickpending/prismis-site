// Content items from the actual TUI screenshot
const contentItems = [
    {
        priority: 'high',
        icon: '●',
        number: '1',
        title: 'Advanced RAG Techniques: Self-RAG and the Knowledge Gap in Agentic AI Systems',
        source: 'r/OpenAI',
        time: '11h',
        stats: 'r2',
        tags: 'self-rag • rag'
    },
    {
        priority: 'high',
        icon: '●',
        number: '2',
        title: '20 Crowdstrike packages infected with malware as Singularity attackers stike again',
        source: 'r/cybersecurity',
        time: '11h',
        stats: 'r29 | 3c',
        tags: 'crowdstrike • npm'
    },
    {
        priority: 'high',
        icon: '●',
        number: '3',
        title: 'Do you see GPT5 as a legacy feature that will eventually be phased out? Or are they still ...',
        source: 'r/OpenAI',
        time: '12h',
        stats: 'r1',
        tags: 'customgpts • chatgpt'
    },
    {
        priority: 'high',
        icon: '●',
        number: '4',
        title: 'Did Azure stop domains recon or tenant [Invoke-AADIntReconAsOutsider]?',
        source: 'r/hacking',
        time: '1d',
        stats: 'r2',
        tags: 'azure • get-federationinformation'
    },
    {
        priority: 'medium',
        icon: '○',
        number: '5',
        title: 'That ACM paper on LLM risks is a sobering read. The 29% error rate on medical documents for GPT-4...',
        source: 'r/OpenAI',
        time: '1d',
        stats: 'r2',
        tags: 'gpt-4 • acm'
    },
    {
        priority: 'high',
        icon: '♥',
        number: '6',
        title: 'Prompt injection is becoming a major security threat',
        source: 'r/cybersecurity',
        time: '1d',
        stats: 'r121',
        tags: 'promptinjection • gemini'
    },
    {
        priority: 'high',
        icon: '●',
        number: '7',
        title: 'Spent 2,512.000.000 tokens in August 2025. What are tokens',
        source: 'r/OpenAI',
        time: '2d',
        stats: 'r36 | 6c',
        tags: 'openai • claude'
    },
    {
        priority: 'high',
        icon: '●',
        number: '8',
        title: 'OpenAI launched complete support for MCP',
        source: 'r/OpenAI',
        time: '3d',
        stats: 'r48 | 4c',
        tags: 'openai • mcp'
    },
    {
        priority: 'high',
        icon: '●',
        number: '9',
        title: 'Essential Reading for Agentic Engineers – August 2025',
        source: 'Steipete Blog',
        url: 'steipete.me',
        time: '20d',
        stats: '10.6k chars',
        tags: 'ai • softwareengineering'
    },
    {
        priority: 'medium',
        icon: '○',
        number: '10',
        title: 'Unsupervised Learning with Michael Brown',
        source: '@unsupervised-learning',
        time: '2d',
        stats: '8.5k views | 49m',
        tags: 'michaelbrown • trailbits'
    },
    {
        priority: 'high',
        icon: '●',
        number: '11',
        title: 'Just One More Prompt',
        source: 'Steipete Blog',
        url: 'steipete.me',
        time: '28d',
        stats: '4.6k chars',
        tags: 'claude • agentic-engineering'
    }
];

// Render content list
function renderContent() {
    const contentList = document.getElementById('content-list');
    if (!contentList) return;

    contentList.innerHTML = '';

    contentItems.forEach((item, index) => {
        const contentEl = document.createElement('div');
        contentEl.className = 'content-item';
        if (index === 0) contentEl.classList.add('selected');

        // Build the meta line based on source type
        let metaLine = '';
        if (item.url) {
            metaLine = `${item.source} | ${item.url} | ${item.time} | ${item.stats} | ${item.tags}`;
        } else {
            metaLine = `${item.source} | ${item.time} | ${item.stats} | ${item.tags}`;
        }

        const paddedNumber = String(item.number).padStart(2, ' ').replace(' ', '&nbsp;');
        // Use special class for favorited items (heart icon)
        const priorityClass = item.icon === '♥' ? 'priority-favorite' : `priority-${item.priority}`;
        contentEl.innerHTML = `
            <div class="content-header">
                <span class="content-priority ${priorityClass}">${item.icon}</span>
                <span class="content-number">${paddedNumber}.</span>
                <span class="content-title">${item.title}</span>
            </div>
            <div class="content-meta">${metaLine}</div>
        `;

        contentList.appendChild(contentEl);
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderContent();

    // Simulate keyboard navigation
    let currentIndex = 0;
    const items = document.querySelectorAll('.content-item');

    // Add keyboard event listener for demo
    document.addEventListener('keydown', (e) => {
        if (!items.length) return;

        if (e.key === 'j' || e.key === 'ArrowDown') {
            items[currentIndex].classList.remove('selected');
            currentIndex = Math.min(currentIndex + 1, items.length - 1);
            items[currentIndex].classList.add('selected');
            items[currentIndex].scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'k' || e.key === 'ArrowUp') {
            items[currentIndex].classList.remove('selected');
            currentIndex = Math.max(currentIndex - 1, 0);
            items[currentIndex].classList.add('selected');
            items[currentIndex].scrollIntoView({ block: 'nearest' });
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});