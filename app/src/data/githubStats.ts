/** Figures for github.com/gideondakore, baked in like `githubProjects` —
 *  no client-side fetch, no rate limit, works offline.
 *
 *  `repositories` counts public *and* private, so it deliberately does not
 *  read `githubProjects.length`: the village can only build houses for the
 *  public ones, since a private repo has no link to open. The two numbers
 *  differing is correct, and the section copy says "public" for that reason.
 *
 *  `starred` is repos Gideon has starred — stars given, not received. */
export const githubStats = {
  username: 'gideondakore',
  repositories: 85,
  followers: 8,
  starred: 5,
  memberSince: 2021,
}
