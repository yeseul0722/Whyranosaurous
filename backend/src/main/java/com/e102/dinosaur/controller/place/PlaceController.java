package com.e102.dinosaur.controller.place;

import com.e102.dinosaur.controller.place.request.PlaceRequest;
import com.e102.dinosaur.service.place.FestivalService;
import com.e102.dinosaur.service.place.PlaceService;
import com.e102.dinosaur.utils.ApiResponse;
import com.e102.dinosaur.utils.ApiUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class PlaceController {

    private final PlaceService placeService;
    private final FestivalService festivalService;

    @PostMapping("/place")
    public ApiResponse<?> placeAdd(@RequestBody PlaceRequest placeRequest) {

        return ApiUtils.success(placeService.savePlace(placeRequest));
    }

    @PostMapping("/festival")
    public ApiResponse<?> festivalAdd() {

        return ApiUtils.success("성공입니다.");
    }
}
