"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import UserSearch from "../../../components/UserSearch";
import RepoList from "../../../components/RepoList";
import { fetchUserRepos } from "../../../lib/githubApi";
import { Repo } from "../../../lib/types";

const DashboardPage = () => {
  const [username, setUsername] = useState("octocat");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (newUsername: string) => {
    setUsername(newUsername);
    setLoading(true);
    setError("");
    try {
      const data = await fetchUserRepos(newUsername);
      setRepos(data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "User not found or API error";
      setError(errorMessage);
      setRepos([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleSearch(username);
  }, [username]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          GitHub Dashboard
        </h1>

        <div className="mb-8">
          <UserSearch onSearch={handleSearch} />
        </div>

        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-lg text-gray-600 dark:text-gray-400">Loading repositories...</span>
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-red-800 dark:text-red-200 font-medium">{error}</span>
            </div>
          </div>
        )}

        {!loading && repos.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Repositories ({repos.length})
            </h2>
            <RepoList repos={repos} />
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No repositories found</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Try searching for a different GitHub username.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
