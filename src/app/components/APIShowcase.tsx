"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";
const apiExample = {
  endpoint: "GET /api/myblog/data",
  response: {
    id: "44394f36-daa3-451c-970f-59238c46ce36",
    name: "myblog",
    slug: "myblog",
    data: {
      articles: [
        {
          content: "this is my article post content",
          draft: "false",
          published: "2025-07-21",
          title: "my sample article",
        },
      ],
      products: [
        {
          name: "Sample Product",
          price: "29.99",
          description: "A great product for everyone",
        },
      ],
    },
  },
};

const codeExample = `const barecmsHost = "http://localhost:8080";

// Fetch all data for a site
async function fetchSiteData(siteSlug) {
  try {
    const url = \`\${barecmsHost}/api/\${siteSlug}/data\`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching site data:", error);
  }
}

// Usage
fetchSiteData("my-blog").then((data) => {
  console.log(data.data.articles); // Access your articles
  console.log(data.data.products); // Access your products
});`;

export default function APIShowcase() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api" className="py-20 lg:py-32">
      <div className="container-bare">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-display text-3xl lg:text-4xl font-bold text-base-content">
              Simple, predictable APIs
            </h2>
            <p className="text-lg text-bare-600 leading-relaxed">
              One endpoint gives you all your content. No complex queries, no
              GraphQL learning curve. Just clean, RESTful APIs that make sense.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-bare-600">
                  Public data access without authentication
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-bare-600">
                  Flat data structure for easy consumption
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-bare-600">
                  Works with any frontend framework
                </span>
              </div>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded text-sm font-mono">
                {apiExample.endpoint}
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="space-y-6">
            {/* API Response */}
            <div className="card-bare p-0 overflow-hidden">
              <div className="bg-base-200 px-4 py-3 border-b border-bare-200">
                <div className="text-sm font-medium text-base-content">
                  API Response
                </div>
              </div>
              <div className="p-4">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-bare-600">
                    {JSON.stringify(apiExample.response, null, 2)}
                  </code>
                </pre>
              </div>
            </div>

            {/* Usage Example */}
            <div className="card-bare p-0 overflow-hidden">
              <div className="bg-base-200 px-4 py-3 border-b border-bare-200 flex items-center justify-between">
                <div className="text-sm font-medium text-base-content">
                  Usage Example
                </div>
                <button
                  onClick={copyToClipboard}
                  className="btn btn-ghost btn-xs"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-success" />
                  ) : (
                    <Clipboard className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="p-4">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-bare-600">{codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
