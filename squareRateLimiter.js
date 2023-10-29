/*
Hello! Welcome to Square!

Today we’re going to be working on a reusable rate limiter library.

Rate limiters are used, as their name implies, to limit the rate at which something happens.  A common example is protecting a website.  Say you have a raspberry pi that’s serving your blog site.  One day, you write a super insightful blog post and the New York Times picks it up and links to it from their front page.  All of a sudden, hundreds of millions of people are rushing over to your site.  Your raspberry pi can’t handle it, its CPU goes up, its memory goes up, maybe it catches on fire.  Sadly, no one can go to your site anymore.

One way to solve this problem is to incorporate a sliding window rate limiter.  This rate limiter program could sit in front of your website and reject requests when exceeding our configured threshold, preventing our computer from getting overheated.

Assume we configure our rate limiter to allow 3 requests in the last 2 seconds.

1) Say we start at time 10, a request comes in, so we check back in the last two seconds and count how many requests we saw:

--8---9---10----- *

2) We see 0 requests, so this would be accepted:

--8---9---10----- A

3) We're still at time 10, and another request comes by.  Again, we check the past 2 seconds and count the requests we see:

--8---9---10----- A ----- *

4) We saw 1 request (we allow 3), so this would be accepted:

--8---9---10----- A ----- A

5) We're still at time 10, another request comes by.  We check the past 2 seconds and count the requests we see:

--8---9---10----- A ----- A ------ *

6) We only see 2 requests, so this would be accepted:

--8---9---10----- A ----- A ------ A

7) We're still at time 10, when another request comes by.  But when we check the last 2 seconds to count the number of requests…

--8---9---10----- A ----- A ------ A ----- *

8) We see 3 requests, so this would be rejected since it would be the 4th:

--8---9---10----- A ----- A ------ A ----- R

9) Some time goes by, we finally hit second 11, and a new request comes by.  Again we repeat the checking procedure, check the last 2 seconds:

--8---9---10----- A ----- A ------ A ----- R ----- 11----- *

10) We still see the original 3 requests that happened at time 10, so this would be rejected as well:

--8---9---10----- A ----- A ------ A ----- R ----- 11----- R

11) Some more time goes by, we hit second 12, and a new request comes by.  Let's check the last 2 seconds again:

--8---9---10----- A ----- A ------ A ----- R ----- 11----- R -----12----- *

12) This time the requests that came in at time 10 are out of scope of our 2 second window, so its requests don't count anymore.  We then only see 0 requests (rejected requests don't count either). Therefore, this gets accepted:

--8---9---10----- A ----- A ------ A ----- R ----- 11----- R -----12----- A 

A web server is just one of many applications for rate limiters, so we're going to be building a reusable Rate Limiter library today.  
*/


class RateLimiter {
    constructor(maxRequests, secondsWindow) {
      this.maxRequests = maxRequests
      this.secondsWindow = secondsWindow
      this.acceptedRequests = {}
    }

    deleteExpiredRequests(leastSecond) {
      Object.keys(this.acceptedRequests).map(ar => {
        if (ar<=leastSecond) delete this.acceptedRequests[ar]
      })
    }
    
    // return true if request should be accepted, false if request should be rejected
    rateLimit(currTime) {
      let totalAccepted = 0
      const leastSecond = currTime-this.secondsWindow
      
      for(let i = currTime; i > leastSecond; i--) {
        if(this.acceptedRequests.hasOwnProperty(i)) totalAccepted+=this.acceptedRequests[i]
      }

      //delete requests longer than 2 seconds ago as we no longer need to compare them
      this.deleteExpiredRequests(leastSecond)

      if(totalAccepted < this.maxRequests) {
        if(this.acceptedRequests.hasOwnProperty(currTime)) 
        this.acceptedRequests[currTime]+=1
        else this.acceptedRequests[currTime] = 1
  
        return true
      }
      return false
    }
  }
  
  console.log("Test 1")
  const r = new RateLimiter(3,2)
  console.log(r.rateLimit(10) == true)
  console.log(r.rateLimit(10) == true)
  console.log(r.rateLimit(10) == true)
  console.log(r.rateLimit(10) == false)
  console.log(r.rateLimit(11) == false)
  console.log(r.rateLimit(12) == true)
  console.log(r.rateLimit(16) == true)
  console.log(r.acceptedRequests)
  
  console.log("Test 2")
  const r2 = new RateLimiter(3,2)
  console.log(r2.rateLimit(10) == true)
  console.log(r2.rateLimit(10) == true)
  console.log(r2.rateLimit(11) == true)
  console.log(r2.rateLimit(11) == false)
  console.log(r2.rateLimit(11) == false)
  console.log(r2.rateLimit(12) == true)
  console.log(r2.rateLimit(13) == true)
  console.log(r2.acceptedRequests)
  
  console.log("Test 3")
  const r3 = new RateLimiter(4,3)
  console.log(r3.rateLimit(10) == true)
  console.log(r3.rateLimit(10) == true)
  console.log(r3.rateLimit(11) == true)
  console.log(r3.rateLimit(11) == true)
  console.log(r3.rateLimit(11) == false)
  console.log(r3.rateLimit(12) == false)
  console.log(r3.rateLimit(13) == true)
  console.log(r3.rateLimit(13) == true)
  console.log(r3.rateLimit(13) == false)
  console.log(r3.acceptedRequests)
