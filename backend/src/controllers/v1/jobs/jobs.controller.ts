import express from 'express';
import Job from './job.interface';

class JobsController {
  public path = '/api/v1/jobs';
  public router = express.Router();

  private jobs: Job[] = [
    {
      company: 'Yapily',
      role: "Software Engineer",
      jobType: "Permanent",
      location: "London, UK",
      link: "https://jobs.smartrecruiters.com/oneclick-ui/company/118051607/job/1409470234/publication/743999710689036",
      lastUpdated: "April 8",
      category: "Computer Software",
      updatedAt: new Date,
      createdAt: new Date,
    }
  ];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.getAllJobs);
  }

  getAllJobs = async (request: express.Request, response: express.Response) => {
    const jobs = await Promise.resolve(this.jobs);

    return response.send(jobs);
  }
}

export default JobsController;
