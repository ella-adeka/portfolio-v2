import img1 from "./images/img_1.jpg";
import img2 from "./images/img_2.jpg";
import img3 from "./images/img_3.jpg";
import cicd from "./images/ci_cd.png";

const data =  
[
    {
        "id": 1,
        "title": "Optimised CI/CD Pipeline",
        "thumbnail": img1,
        "img": cicd,
        "liveDemo": img1,
        "description": "A CI/CD Pipeline optimised with IaC and automation",
        "tools": [
            "aws",
            "python",
            "bash",
            "terraform",
            "jenkins",
            "docker",
            "git",
            "github",
            "prometheus",
            "grafana",
        ],
        "url": "optimised-ci-cd-pipeline",
        "blogLink": "https://ellaadeka.hashnode.dev/deploying-a-flask-application-from-github-on-an-ec2-instance",
        "githubLink": "https://github.com/ella-adeka/CI-CD-Pipeline-Optimisation.git",
        "liveSite": "https://github.com/ella-adeka/CI-CD-Pipeline-Optimisation.git",
        "comingSoon": false
    },
    {
        "id": 2,
        "title": "Jectam",
        "thumbnail": img2,
        "img": img2,
        "liveDemo": img2,
        "description": "An integrated automated project management system",
        "tools": [
            "aws",
            "terraform"
        ],
        "url": "jectam",
        "blogLink": "https://ellaadeka.hashnode.dev/deploying-a-flask-application-from-github-on-an-ec2-instance",
        "githubLink": "https://github.com/ella-adeka/CI-CD-Pipeline-Optimisation.git",
        "liveSite": "https://github.com/ella-adeka/CI-CD-Pipeline-Optimisation.git",
        "comingSoon": true
    },
    {
        "id": 3,
        "title": "DOPI",
        "thumbnail": img3,
        "img": img3,
        "liveDemo": img3,
        "description": "A curated list of DevOps Project Ideas in one website",
        "tools": [
            "aws",
            "terraform"
        ],
        "url": "dopi",
        "blogLink": "https://ellaadeka.hashnode.dev/deploying-a-flask-application-from-github-on-an-ec2-instance",
        "githubLink": "https://github.com/ella-adeka/CI-CD-Pipeline-Optimisation.git",
        "liveSite": "https://github.com/ella-adeka/CI-CD-Pipeline-Optimisation.git",
        "comingSoon": true
    }
]

export default data;
