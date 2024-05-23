import {TestBed} from '@angular/core/testing';

import {CommentService} from './comment.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CommentService', () => {
  let service: CommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(CommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the getAllCommentsOfFeedback method', () => {
    const feedbackId = 1;
    const url = service.baseUrl + "/feedback/" + feedbackId + "/comments";
    const spy = spyOn(service.httpClient, 'get').and.callThrough();
    service.getAllCommentsOfFeedback(feedbackId);
    expect(spy).toHaveBeenCalledWith(url);
  });

  it('should call the saveComment method', () => {
    const feedbackId = 1;
    const comment = {id: 1, text: "test"};
    const url = service.baseUrl + "/feedback/" + feedbackId + "/comments";
    const spy = spyOn(service.httpClient, 'post').and.callThrough();
    service.saveComment(comment, feedbackId);
    expect(spy).toHaveBeenCalledWith(url, comment, service.options);
  });
});
