//lib/githubApi.ts

export async function fetchUserRepos(username: string) {
  //Fetches repository fr a given github username

  const res = await fetch(`https://api.github.com/users/${username}/repos`);

  //this waits for theresponses from githbu API

  if (!res.ok) {
    //check if the response is not ok

    throw new Error("Failed to fecth repositories");
  }

  return res.json();
}
