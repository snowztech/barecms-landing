"use client";

import { useState } from "react";
import { Check, Clipboard } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Create project directory",
    command: "mkdir barecms-app && cd barecms-app",
  },
  {
    step: "2",
    title: "Setup environment file",
    command: `curl -sSL https://raw.githubusercontent.com/snowztech/barecms/main/deploy/.env.template | sed "s/gen_jwt_secret/$(openssl rand -base64 32)/" > .env`,
  },
  {
    step: "3",
    title: "Download docker-compose.yml",
    command:
      "curl -o docker-compose.yml https://raw.githubusercontent.com/snowztech/barecms/main/deploy/docker-compose.yml",
  },
  {
    step: "4",
    title: "Launch BareCMS",
    command: "docker compose up -d",
  },
];

export default function QuickStart() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCommand = (command: string, index: number) => {
    navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="quickstart" className="py-12 lg:py-32 bg-base-200/50">
      <div className="container-bare">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-display text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-4 lg:mb-6 px-4">
            Up and running in 2 minutes
          </h2>
          <p className="text-base lg:text-lg text-bare-600 max-w-2xl mx-auto">
            Get BareCMS running locally with Docker Compose. No complex setup,
            no configuration hell.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 lg:space-y-6">
            {steps.map((step, index) => (
              <div key={step.step} className="card-bare p-4 lg:p-6">
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold text-xs lg:text-sm">
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base-content mb-2 text-sm lg:text-base">
                      {step.title}
                    </h3>
                    <div className="bg-base-200 rounded-bare p-3 lg:p-4 font-mono text-xs lg:text-sm overflow-x-auto relative group">
                      <button
                        onClick={() => copyCommand(step.command, index)}
                        className="absolute top-2 right-2 btn btn-ghost btn-xs opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity touch-manipulation"
                      >
                        {copiedIndex === index ? (
                          <Check className="w-3 h-3 lg:w-4 lg:h-4 text-success" />
                        ) : (
                          <Clipboard className="w-3 h-3 lg:w-4 lg:h-4" />
                        )}
                      </button>
                      <code className="text-bare-600 pr-8 lg:pr-12 block break-all lg:break-normal">
                        {step.command}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 lg:mt-8 px-4">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium">
              <Check className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="break-all lg:break-normal">
                BareCMS running at
                <a
                  href="http://localhost:8080"
                  target="_blank"
                  className="text-success hover:underline ml-1"
                >
                  localhost:8080
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
