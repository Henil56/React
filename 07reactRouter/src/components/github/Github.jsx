import React, { useEffect, useState } from 'react';
import { useLoaderData , useNavigation} from 'react-router-dom';

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-500/80"></div>
    </div>
  );
}

function Github() {
  
  const { user, repos } = useLoaderData();
  const navigation = useNavigation();
  

  // useEffect(() => {
  //   async function fetchGitHubData() {
  //     try {
  //       setLoading(true);

  //       const [userRes, reposRes] = await Promise.all([
  //         fetch('https://api.github.com/users/Henil56'),
  //         fetch('https://api.github.com/users/Henil56/repos'),
  //       ]);

  //       if (!userRes.ok || !reposRes.ok) throw new Error('Network response was not ok');

  //       const userData = await userRes.json();
  //       const reposData = await reposRes.json();

  //       const sortedRepos = reposData.sort(
  //         (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  //       );

  //       setUser(userData);
  //       setRepos(sortedRepos);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error('Failed to fetch GitHub data:', err);
  //       setError(err);
  //       setLoading(false);
  //     }
  //   }

  //   fetchGitHubData();
  // }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black p-6 sm:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 tracking-tight 
                       text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
          My GitHub Repositories
        </h1>
        {navigation.state === "loading" && <LoadingSpinner />}
        
        {/* Content */}
        {user && repos && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="flex flex-col items-center md:items-start bg-gray-900/60 backdrop-blur-lg p-6 rounded-3xl shadow-lg">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s GitHub avatar`}
                width={300}
                className="rounded-2xl shadow-2xl"
              />
              <h2 className="mt-4 text-2xl font-extrabold text-cyan-400 drop-shadow-lg">{user.login}</h2>
              {user.bio && (
                <p className="mt-2 text-gray-300 text-sm text-center md:text-left">
                  {user.bio}
                </p>
              )}
            </div>

            {/* Repositories Section */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-gray-800/60 backdrop-blur-lg border border-gray-700/50 
                             p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/40 transition-transform 
                             transform hover:-translate-y-2 hover:bg-gray-800/70"
                >
                  <h2 className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 group-hover:underline mb-3 truncate drop-shadow-sm">
                    {repo.name}
                  </h2>
                  <p className="text-gray-400 text-sm mb-6 h-12 overflow-hidden">
                    {repo.description || 'No description provided.'}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-300">
                    <span className="font-mono bg-gray-700/50 px-3 py-1 rounded-lg">
                      {repo.language || 'N/A'}
                    </span>
                    <div className="flex items-center gap-2 text-yellow-400 drop-shadow-sm">
                      ⭐ {repo.stargazers_count}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader=async()=>{
  const token= import.meta.env.VITE_GITHUB_TOKEN;
  const header={
    Authorization: `token${token}`,
  }
  const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/Henil56'),
          fetch('https://api.github.com/users/Henil56/repos'),
    ]);
     if (!userRes.ok || !reposRes.ok) {
    throw new Error("Failed to fetch GitHub data");
  }
    const [userData, reposData] = await Promise.all([
    userRes.json(),
    reposRes.json(),
  ]);

  const sortedRepos = reposData.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  );

  return { user: userData, repos: sortedRepos };
};

