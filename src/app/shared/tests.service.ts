import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  tests = [
    [
      {
        'id': 1,
        'question': 'No 1-1',
        'answer1': '1.1',
        'answer2': '1.2',
        'answer3': '1.3',
        'rigthAnswer': '1.2'
      },
      {
        'id': 2,
        'question': 'No 1-2',
        'answer1': '2.1',
        'answer2': '2.2',
        'answer3': '2.3',
        'rigthAnswer': '2.2'
      },
      {
        'id': 3,
        'question': 'No 1-3',
        'answer1': '3.1',
        'answer2': '3.2',
        'answer3': '3.3',
        'rigthAnswer': '3.2'
      }
    ],
    [
      {
        'id': 1,
        'question': 'No 2-1',
        'answer1': '1.1',
        'answer2': '1.2',
        'answer3': '1.3',
        'rigthAnswer': '1.2'
      },
      {
        'id': 2,
        'question': 'No 2-2',
        'answer1': '2.1',
        'answer2': '2.2',
        'answer3': '2.3',
        'rigthAnswer': '2.2'
      },
      {
        'id': 3,
        'question': 'No 2-3',
        'answer1': '3.1',
        'answer2': '3.2',
        'answer3': '3.3',
        'rigthAnswer': '3.2'
      },
      {
        'id': 4,
        'question': 'No 2-4',
        'answer1': '4.1',
        'answer2': '4.2',
        'answer3': '4.3',
        'rigthAnswer': '4.1'
      }
    ],
    [
      {
        'id': 1,
        'question': 'No 3-1',
        'answer1': '1.1',
        'answer2': '1.2',
        'answer3': '1.3',
        'rigthAnswer': '1.2'
      },
      {
        'id': 2,
        'question': 'No 3-2',
        'answer1': '2.1',
        'answer2': '2.2',
        'answer3': '2.3',
        'rigthAnswer': '2.2'
      },
      {
        'id': 3,
        'question': 'No 3-3',
        'answer1': '3.1',
        'answer2': '3.2',
        'answer3': '3.3',
        'rigthAnswer': '3.2'
      }
    ],
  ];

  constructor(private http: HttpClient) {
  }

  getTests() {
    return this.http.get('http://localhost:3000/tests');
  }
}
